// client1
const aReading = acuireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading = acuireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// baseRate(aReading.month, aReading.year) * aReading.quantity
// 処理が重複している