import 'dart:convert';
import 'dart:io';
import 'package:frontend_mobile/configs/api_constants.dart';
import 'package:frontend_mobile/features/healthrecords/models/prescription_model.dart';
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

  Future<List<Prescription>> getAllPrescriptions(String id) async {
    try {
      final response =
          await http.get(Uri.parse('${ApiConstants.getAllPrescriptions}/$id'));
      if (response.statusCode == 200) {
        final Map<String,dynamic> jsonResponse = jsonDecode(response.body);

        final List<Prescription> prescriptions = jsonResponse['prescriptions']
            .map<Prescription>((prescription) => Prescription.fromJson(prescription))
            .toList();

        return prescriptions;
      }else{
        throw Exception('Error fetching prescriptions');
      }
    } catch (e) {
      throw Exception('Error fetching prescriptions: $e');
    }
  }

  Future<Prescription> getPrescription(String id) async {
    try {
      final response =
          await http.get(Uri.parse('${ApiConstants.getPrescription}/$id'));
      if (response.statusCode == 200) {
        final Map<String, dynamic> prescription = jsonDecode(response.body);
        print('Prescription: $prescription');
        return Prescription.fromJson(prescription);
      } else {
        print('Error: ${response.body}');
        throw Exception('Error fetching prescription');
      }
    } catch (e) {
      throw Exception('Error fetching prescription: $e');
    }
  }
}
