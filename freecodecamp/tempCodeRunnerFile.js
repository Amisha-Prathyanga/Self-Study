function VirusGuard(sectorsize, cleanrate, replicationrate) {
  let result = [];

  let replicatedData = Math.pow(2, -7) * replicationrate;

  replicatedSectorSize = sectorsize * (1 + replicatedData);

  result = (replicatedSectorSize * 8192) / cleanrate;

  return result;
}
console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5));