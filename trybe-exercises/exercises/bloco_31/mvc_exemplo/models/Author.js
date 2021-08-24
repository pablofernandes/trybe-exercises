const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
};
  
  // Serializa o nome dos campos de snake_case para camelCase
  
  const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});
  
  // Busca todos os autores do banco.
  
  const getAll = async () => {
    const [authors] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM authors;',
    );
    return authors.map(serialize).map(getNewAuthor);
  };

  const findById = async (id) => {
    const [
      authorData,
    ] = await connection.execute(
      'SELECT  first_name, middle_name, last_name FROM authors WHERE id = ?',
      [id]
    );
  
    if (!authorData.length) return null;
  
    const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  
    return getNewAuthor({
      id,
      firstName,
      middleName,
      lastName,
    });
  };
  
  
  module.exports = {
    getAll,
    findById,
  };