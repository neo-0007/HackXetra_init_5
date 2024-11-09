import 'dart:convert';
import 'package:frontend_mobile/features/auth/models/user_model.dart';
import 'package:http/http.dart' as http;

class AuthServices {
  Future<String> signup(UserModel user) async {
    final res = await http.post(
      Uri.parse('url/signup'),
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
      Uri.parse('url/login'),
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
}
