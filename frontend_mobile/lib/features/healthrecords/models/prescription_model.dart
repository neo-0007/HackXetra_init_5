class PrescriptionResponse {
  final String? message;
  final List<Prescription>? prescriptions;

  PrescriptionResponse({
    this.message,
    this.prescriptions,
  });

  factory PrescriptionResponse.fromJson(Map<String, dynamic> json) {
    return PrescriptionResponse(
      message: json['message'],
      prescriptions: (json['prescriptions'] as List?)
          ?.map((p) => Prescription.fromJson(p))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'message': message,
      'prescriptions': prescriptions?.map((p) => p.toJson()).toList(),
    };
  }
}

class Prescription {
  final Doctor? doctor;
  final String? id;
  final String? userId;
  final List<PrescriptionItem>? prescription;
  final String? medicalCondition;

  Prescription({
    this.doctor,
    this.id,
    this.userId,
    this.prescription,
    this.medicalCondition,
  });

  factory Prescription.fromJson(Map<String, dynamic> json) {
    return Prescription(
      doctor: json['doctor'] != null ? Doctor.fromJson(json['doctor']) : null,
      id: json['_id'],
      userId: json['user_id'],
      prescription: (json['prescription'] as List?)
          ?.map((p) => PrescriptionItem.fromJson(p))
          .toList(),
      medicalCondition: json['medicalCondition'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'doctor': doctor?.toJson(),
      '_id': id,
      'user_id': userId,
      'prescription': prescription?.map((p) => p.toJson()).toList(),
      'medicalCondition': medicalCondition,
    };
  }
}

class Doctor {
  final String? name;
  final String? phone;

  Doctor({
    this.name,
    this.phone,
  });

  factory Doctor.fromJson(Map<String, dynamic> json) {
    return Doctor(
      name: json['name'],
      phone: json['phone'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'phone': phone,
    };
  }
}

class PrescriptionItem {
  final Medicine? medicine;
  final String? id;

  PrescriptionItem({
    this.medicine,
    this.id,
  });

  factory PrescriptionItem.fromJson(Map<String, dynamic> json) {
    return PrescriptionItem(
      medicine: json['medicine'] != null ? Medicine.fromJson(json['medicine']) : null,
      id: json['_id'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'medicine': medicine?.toJson(),
      '_id': id,
    };
  }
}

class Medicine {
  final String? name;
  final String? dosage;
  final String? frequency;
  final String? timing;

  Medicine({
    this.name,
    this.dosage,
    this.frequency,
    this.timing,
  });

  factory Medicine.fromJson(Map<String, dynamic> json) {
    return Medicine(
      name: json['name'],
      dosage: json['dosage'],
      frequency: json['frequency'],
      timing: json['timing'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'dosage': dosage,
      'frequency': frequency,
      'timing': timing,
    };
  }
}
