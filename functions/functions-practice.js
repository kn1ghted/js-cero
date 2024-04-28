// Create XMEN objects constructor 
function Mutant (alias, realName, alignment, power){
    this.alias = alias;
    this.realName = realName;
    this.alignment = alignment;
    this.power = power;
    this.isLeader = false;
    this.displayInfo = function () {
        var title = new String(this.alias);
        title.toUpperCase();
        console.log(`Mutant Archive: ${title}
        Name: ${this.realName} alias ${this.alias}
        Alignment: ${this.alignment}
        Power: ${this.power}
        ${this.isLeader?'Leader: Yes':'Leader: No'}
        `);
    };
    this.becomeLeader = function(){
        this.isLeader = true;
        console.log(`${this.alias} has become the leader of the Mutants!`)}
    };

const nightcrawler = new Mutant('Nightcrawler', 'Kurt Wagner', 'XMEN', 'Teletransportation')
const magneto = new Mutant('Magneto', 'Max Eisenhardt', 'Evil', 'Magnetism Control')
const cyclops = new Mutant('Cyclops', 'Scott Summers', 'XMEN', 'Optic Blast')

nightcrawler.displayInfo();
magneto.displayInfo();
cyclops.displayInfo();
cyclops.becomeLeader();
cyclops.displayInfo();