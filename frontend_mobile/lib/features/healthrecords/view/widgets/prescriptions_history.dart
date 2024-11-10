import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/services/auth_services.dart';
import 'package:frontend_mobile/features/healthrecords/models/prescription_model.dart';
import 'package:frontend_mobile/features/healthrecords/services/health_record_services.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_card.dart';
import 'package:shared_preferences/shared_preferences.dart';

class PrescriptionsHistory extends StatefulWidget {
  const PrescriptionsHistory({super.key});

  @override
  State<PrescriptionsHistory> createState() => _PrescriptionsHistoryState();
}

class _PrescriptionsHistoryState extends State<PrescriptionsHistory> {
  late String userId;
  List<Prescription> prescriptions = [];
  bool isLoading = true;
  bool hasError = false;

  Future<void> getUser() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    final String? token = prefs.getString('token');
    if (token != null) {
      userId = await AuthServices().decodeToken(token);
      print('Token: $token');
      print('User ID: $userId');
    } else {
      print('Token not found');
    }
  }

  Future<void> getPrescriptions() async {
    try {
      final List<Prescription> _prescriptions =
          await HealthRecordServices().getAllPrescriptions(userId);
      setState(() {
        prescriptions = _prescriptions;
        isLoading = false;
      });
      print('Prescriptions: $prescriptions');
    } catch (e) {
      setState(() {
        isLoading = false;
        hasError = true;
      });
      print('Error fetching prescriptions: $e');
    }
  }

  @override
  void initState() {
    super.initState();
    getUser().then((_) => getPrescriptions());
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (hasError) {
      return const Center(
          child: Text('An error occurred while fetching prescriptions.'));
    }

    if (prescriptions.isEmpty) {
      return const Center(child: Text('No prescriptions available'));
    }

    return SingleChildScrollView(
      // Wrap with SingleChildScrollView to make it scrollable
      child: Column(
        mainAxisSize: MainAxisSize.min, // Shrink-wrap column
        children: [
          for (int i = 0; i < prescriptions.length; i++) 
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0),
              child: HealthRecordCard(
                recordTitle: prescriptions[i].medicalCondition??'',  // Adding prescription number
                recordDescription: 'Doctor: ${prescriptions[i].doctor!.name}',
                recordId: prescriptions[i].id!,  // Use the userId or prescriptionId
              ),
            ),
        ],
      ),
    );
  }
}
