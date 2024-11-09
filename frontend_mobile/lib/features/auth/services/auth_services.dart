import 'dart:convert';
import 'package:frontend_mobile/configs/api_constants.dart';
import 'package:frontend_mobile/features/auth/models/user_model.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class AuthServices {
  Future<String> signup(UserModel user) async {
    final res = await http.post(
      Uri.parse(ApiConstants.signup),
      body: user.toJson(),
    );

    if (res.statusCode == 201) {
      return 'Success';
    } else {
      return res.body.toString();
    }
  }

  Future<String> login(String email, String password) async {
    final res = await http.post(
      Uri.parse(ApiConstants.login),
      body: jsonEncode({
        email: email,
        password: password,
      }),
    );
    if (res.statusCode == 200) {
      return 'Success';
    } else {
      return res.body.toString();
    }
  }

  Future<void> storeToken(String token) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('token', token);
  }

  Future<String?> getToken() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.getString('token');
}

Future<void> clearToken() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.remove('token');
}
}
