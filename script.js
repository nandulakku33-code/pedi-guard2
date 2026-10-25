const patientForm = document.getElementById("patientForm");
const medicineForm = document.getElementById("medicineForm");
const symptomForm = document.getElementById("symptomForm");

patientForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const age = document.getElementById("age").value;

    if (!name || age === "") {
        document.getElementById("patientMessage").textContent =
            "Please enter the patient name and age.";
        return;
    }

    document.getElementById("patientMessage").textContent =
        "Demo patient details saved on this page.";
});

medicineForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const medicine = document.getElementById("medicineName").value.trim();
    const module = document.getElementById("module").value;
    const status = document.getElementById("verification").value;

    const result = document.getElementById("safetyResult");

    if (!medicine || !module || !status) {
        result.textContent = "Please complete all required fields.";
        return;
    }

    if (status === "unverified") {
        result.textContent =
            "STOP: Prescription is not verified. Do not use this demo " +
            "to authorize dispensing. Seek review by an authorized professional.";
        return;
    }

    result.textContent =
        "Basic information check completed. This does not confirm " +
        "clinical safety or authorize dispensing. No dose was calculated.";
});

symptomForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const symptom = document.getElementById("symptom").value.trim();
    const severity = document.getElementById("severity").value;
    const onset = document.getElementById("onset").value.trim();

    if (!symptom || !severity) {
        document.getElementById("symptomMessage").textContent =
            "Please enter the symptom and severity.";
        return;
    }

    const report = document.createElement("div");
    report.className = "report";

    const heading = document.createElement("strong");
    heading.textContent = "Caregiver Symptom Report";

    const details = document.createElement("p");
    details.textContent = "Symptom: " + symptom;

    const level = document.createElement("p");
    level.textContent = "Reported severity: " + severity;

    const time = document.createElement("p");
    time.textContent = "Onset: " + (onset || "Not specified");

    report.append(heading, details, level, time);

    document.getElementById("reportList").prepend(report);
    document.getElementById("symptomMessage").textContent =
        "Report added to the demo page. It has not been sent to a clinician.";

    symptomForm.reset();
});