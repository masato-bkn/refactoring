// client1
const rawReading = acuireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// client2
const rawReading = acuireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

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
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year))
    return result;
}
