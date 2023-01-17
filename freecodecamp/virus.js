// function VirusGuard(sectorsize, cleanrate, replicationrate) {
//   let result = [];

//   let replicatedData = Math.pow(2, -7) * replicationrate;

//   replicatedSectorSize = sectorsize * (1 + replicatedData);

//   result = (replicatedSectorSize * 8192) / cleanrate;

//   return result;
// }
// console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5));

// const initialSize = 1 * Math.pow(1024, 2); // 1MB in bytes
// const cleaningRate = 5 * Math.pow(2, 10); // 5 kbits in bytes
// const replicationRate = 2.5;
// const replicationInterval = Math.pow(2, -7); // 2^-7 seconds

// let size = initialSize;
// let time = 0;

// while (size > 0) {
//   size *= 1 + replicationInterval * replicationRate;
//   size -= cleaningRate * replicationInterval;
//   time += replicationInterval;
// }

// console.log(
//   "It will take " + time + " seconds for the antivirus to clean the sector."
// );

function VirusGuard(sectorSize, cleanRate, replicationRate) {
  let result = [];
  let rate = 1 + replicationRate;
  let size = Math.log(sectorSize / cleanRate) / Math.log(rate);
  result.push(size);
  return result;
}
console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5));
