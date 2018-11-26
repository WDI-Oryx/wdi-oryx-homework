let transformers = [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    form_type: 'vehicle',
    team: 'Autobot'
  },
  {
    name: 'Megatron',
    form: 'Gun',
    form_type: 'object',
    team: 'Decepticon'
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    form_type: 'vehicle',
    team: 'Autobot'
  },
  {
    name: 'Soundwave',
    form: 'Walkman',
    form_type: 'object',
    team: 'Decepticon'
  },
  {
    name: 'Starscream',
    form: 'Fighter Jet',
    form_type: 'vehicle',
    team: 'Decepticon',
  },
  {
    name: 'Rodimus Prime',
    form: 'Ford GT',
    form_type: 'vehicle',
    team: 'Autobot',
  }
];

function transformersNames() {
  return transformers.map(t => t.name);
}

function onlyAutobots() {
  return transformers.filter(t => t.team === "Autobot");
}

function onlyVehicles() {
  return transformers.filter(t => t.form_type === "vehicle");
}

console.table(transformersNames());
console.table(onlyAutobots());
console.table(onlyVehicles());