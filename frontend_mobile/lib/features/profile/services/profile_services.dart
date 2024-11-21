import 'dart:convert';
import 'package:frontend_mobile/configs/api_constants.dart';
import 'package:frontend_mobile/features/auth/models/user_model.dart';
import 'package:http/http.dart' as http;

class ProfileServices {

  Future<UserModel> getUserById(String id) async {
    try {
      
      final res = await http.get(
        Uri.parse('${ApiConstants.getUser}/$id'),
      );
      if (res.statusCode == 200) {
        final Map<String,dynamic> user = jsonDecode(res.body);
        return UserModel.fromJson(user);
      } else {
        throw Exception('Http Error');
      }
    } catch (e) {
      throw Exception('Error fetching user!');
    }
  }
}
