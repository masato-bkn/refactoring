function alertForMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
    }
    return "";
}

