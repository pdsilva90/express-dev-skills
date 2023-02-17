const skills = [
    {id: 125223, skill: 'JavaScript', mastered: true},
    {id: 127904, skill: 'Node.js', mastered: true},
    {id: 139608, skill: 'CSS', mastered: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.mastered = false;
  skills.push(skill);
}
  
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }