// Create XMEN objects constructor 
funcion Mutant (alias, name, alignment, ability){
    this.alias = alias;
    this.name = name;
    this.alignment = alignment;
    this.ability = ability;
    this.isLeader = false;
}

const nightcrawler = new Mutant('Nightcrawler', 'Kurt Wagner', 'XMEN', 'Teletransportation')
const magneto = new Mutant('Magneto', 'Max Eisenhardt', 'Evil', 'Magnetism Control')
const cyclops = new Mutant('Cyclops', 'Scott Summers', 'XMEN', 'Optic Blast')