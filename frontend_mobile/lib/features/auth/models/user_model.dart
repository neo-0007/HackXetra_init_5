class UserModel {
  final String firstName;
  final String lastName;
  final String gender;
  final String phone;
  final String email;
  final String address1;
  final String address2;
  final String city;
  final String pin;
  final String district;
  final String state;
  final String country;
  final String password;
  final String confirmPassword;

  UserModel({
    required this.firstName,
    required this.lastName,
    required this.gender,
    required this.phone,
    required this.email,
    required this.address1,
    required this.address2,
    required this.city,
    required this.pin,
    required this.district,
    required this.state,
    required this.country,
    required this.password,
    required this.confirmPassword,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      firstName: json['firstName'],
      lastName: json['lastName'],
      gender: json['gender'],
      phone: json['phone'],
      email: json['email'],
      address1: json['address1'],
      address2: json['address2'],
      city: json['city'],
      pin: json['pin'],
      district: json['district'],
      state: json['state'],
      country: json['country'],
      password: json['password'],
      confirmPassword: json['confirmPassword'],
    );
  }
Map<String, dynamic> toJson() {
  return {
    'firstName': firstName,
    'lastName': lastName,
    'gender': gender,
    'phone': phone,
    'email': email,
    'address1': address1,
    'address2': address2,
    'city': city,
    'pin': pin,
    'district': district,
    'state': state,
    'country': country,
    'password': password,
    'confirmPassword': confirmPassword,
  };
}}