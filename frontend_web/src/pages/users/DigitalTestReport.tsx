import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

const DigitalTestReport = () => {
    const [Report, setReports] = useState(
    {
      patientName: "John Doe",
      dateOfTest: "October 27, 2024",
      lab: "Health Diagnostics Lab",
      testType: "Blood Sugar Test",
      referredBy: "Dr. Rajib Gayan",
      results: [
        { name: "Glucose Level", value: "95 mg/dL" },
        { name: "Cholesterol", value: "180 mg/dL" },
        { name: "Triglycerides", value: "150 mg/dL" },
      ],
      notes:
        "The blood sugar and cholesterol levels are within the normal range. Continue with your regular diet and exercise routine. Please consult again in 3 months for a follow-up test.",
      licenseNo: "123456789",
    });
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-blue-600">Digital Test Report</h1>
            <p className="text-gray-500">{Report.lab}</p>
          </div>

          {/* Patient and Test Details */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Patient Name:</p>
                <p className="text-lg font-semibold text-gray-800">{Report.patientName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date of Test:</p>
                <p className="text-lg font-semibold text-gray-800">{Report.dateOfTest}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Test Type:</p>
                <p className="text-lg font-semibold text-gray-800">{Report.testType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Reffered by:</p>
                <p className="text-lg font-semibold text-gray-800">{Report.referredBy}</p>
              </div>
            </div>
          </div>

          {/* Test Results */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-blue-600 border-b pb-2">Test Results</h2>
            <div className="mt-4 space-y-2">
              {Report.results.map((result: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                <div key={index} className="flex justify-between">
                  <p className="text-gray-700">{result.name}</p>
                  <p className="text-gray-800 font-semibold">{result.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor's Notes */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-blue-600 border-b pb-2">Notes to point</h2>
            <p className="mt-4 text-gray-700">
              {Report.notes}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
            <p className="mt-2">This report is digitally signed and verified.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalTestReport;
