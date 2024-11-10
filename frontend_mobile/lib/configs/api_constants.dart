class ApiConstants {
  // ignore: constant_identifier_names
  static const String BASE_URL = 'http://localhost:3000';
  static const String addPrescription = '$BASE_URL/api/v1/user/upload-prescription';
  static const String addLabReports = '$BASE_URL/api/v1/user/upload-lab-report';
  static const String getAllPrescriptions = '$BASE_URL/api/v1/user/prescription/all';
  static const String getPrescription = '$BASE_URL/api/v1/user/prescription/byId';
  static const String signup = '$BASE_URL/api/v1/user/signup';
  static const String login = '$BASE_URL/api/v1/user/login';
  static const String verifyToken = '$BASE_URL/api/v1/user/verify';
}