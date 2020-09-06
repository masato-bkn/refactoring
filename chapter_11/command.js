function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    excute() {
        let result = 0;
        let healthLevel = 0;
        let highMedicalRiskFlag = false;
        // ...
    
        if (medicalExam.isSmoker) {
            healthLevel += 10;
            highMedicalRiskFlag = true;
        }
        // ...
    }
}
