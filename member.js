function skillsMember() {
  this.skills = [];

  // Methode zum Hinzufügen einer Fähigkeit
  this.addSkill = function(skill) {
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
    }
  };

  // Methode zum Auflisten aller Fähigkeiten
  this.listSkills = function() {
    return this.skills;
  };
}