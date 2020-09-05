function score(candidate, medicalExam, scoringGuide) {
    return new ScriptProcessorNode().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
    excute(candidate, medicalExam, scoringGuide) {
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
