
exports.up = function(knex) {
    return knex.schema
    .createTable('animal-zoos', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    })
};

exports.down = function(knex) {
  
};
