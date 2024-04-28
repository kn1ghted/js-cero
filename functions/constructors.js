/*
Constructors are functions that create objects
*/

// Arrow function for custom message
const customMessage = () => 'Goodbye everybody!'

// Regular Constructor - uses THIS to set attributes
function Rocket (name,ownMessage) {
    this.name=name
    this.launchMessage=ownMessage
}

// Use regular constructor
const falcon9Rocket = new Rocket('Falcon 9',customMessage)
const falconHeavyRocket=new Rocket('Falcon Heavy',customMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

// Constructor with arrow function
const RocketWithArrowFunction = (name,ownMessage) => ({name:name,launchMessage:ownMessage})

// Arrow function
const personalizedMessageForArrowFunction = () => 'Successful launch !'
// Use constructor with arrow function - does not requiere this
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)
console.log(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())