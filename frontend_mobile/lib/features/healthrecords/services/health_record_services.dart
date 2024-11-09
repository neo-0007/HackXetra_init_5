import 'dart:io';
import 'package:frontend_mobile/configs/api_constants.dart';
import 'package:http/http.dart' as http;
import 'package:file_picker/file_picker.dart';

class HealthRecordServices {
  Future<String> uploadPrescription(PlatformFile file) async {
    try {
      // Create a multipart request
      final request = http.MultipartRequest(
        'POST',
        Uri.parse(ApiConstants.addPrescription),
      );

      // Add headers if necessary
      request.headers.addAll({
        'Content-Type': 'multipart/form-data',
      });

      // Attach the file to the request
      request.files.add(
        http.MultipartFile(
          'prescription', // The name expected by the backend API
          File(file.path!).readAsBytes().asStream(),
          File(file.path!).lengthSync(),
          filename: file.name,
        ),
      );

      // Send the request
      final response = await request.send();

      // Check if the upload was successful
      if (response.statusCode == 200) {
        return 'Success';
      } else {
        final resBody = await response.stream.bytesToString();
        return 'Failed: $resBody';
      }
    } catch (e) {
      return 'Error: ${e.toString()}';
    }
  }
}
