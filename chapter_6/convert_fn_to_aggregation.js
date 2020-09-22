// client1
const rawReading = acuireReading();
const aReading = enrichReading(rawReading);
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const rawReading = acuireReading();
const aReading = enrichReading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client3
const rawReading = acuireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// baseRate(aReading.month, aReading.year) * aReading.quantity
// 処理が重複している

// 変換ステップ
function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result)
    return result;
}
