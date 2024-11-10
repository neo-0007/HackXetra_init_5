import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/screens/login_page.dart';
import 'package:frontend_mobile/features/auth/view/screens/signup_page.dart';
import 'package:frontend_mobile/features/auth/view/screens/user_selection_page.dart';
import 'package:frontend_mobile/features/common/root_home_page.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/add_records_page.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/health_records_page.dart';
import 'package:frontend_mobile/features/home/view/screens/home_screen.dart';
import 'package:frontend_mobile/features/profile/view/screens/profile_page.dart';
import 'package:frontend_mobile/routes/route_constants.dart';
import 'package:frontend_mobile/features/auth/services/auth_services.dart';
import 'package:go_router/go_router.dart';

class AppRouter {
  final AuthServices _authServices = AuthServices();

  Future<bool> _isAuthenticated() async {
    final token = await _authServices.getToken();
    return token != null && token.isNotEmpty;
  }

  late final GoRouter router = GoRouter(
    initialLocation: RouteConstants.userSelectionPage,
    routes: [
      GoRoute(
        name: RouteConstants.userSelectionPage,
        path: '/userSelectionPage',
        pageBuilder: (context, state) => const MaterialPage(
          child: UserSelectionPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.login,
        path: '/login',
        pageBuilder: (context, state) => const MaterialPage(
          child: LoginPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.signup,
        path: '/signup',
        pageBuilder: (context, state) => const MaterialPage(
          child: SignupPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.healthRecords,
        path: '/healthRecords',
        pageBuilder: (context, state) => const MaterialPage(
          child: HealthRecordsPage(),
        ),
        redirect: (context, state) async =>
            await _isAuthenticated() ? null : '/login',
      ),
      GoRoute(
        name: RouteConstants.addRecord,
        path: '/addRecord',
        pageBuilder: (context, state) => const MaterialPage(
          child: AddRecordsPage(),
        ),
        redirect: (context, state) async =>
            await _isAuthenticated() ? null : '/login',
      ),
      GoRoute(
        name: RouteConstants.rootHomePage,
        path: '/rootHomePage',
        pageBuilder: (context, state) => const MaterialPage(
          child: RootHomePage(),
        ),
        redirect: (context, state) async =>
            await _isAuthenticated() ? null : '/login',
      ),
      GoRoute(
        name: RouteConstants.homePage,
        path: '/homePage',
        pageBuilder: (context, state) => const MaterialPage(
          child: HomeScreen(),
        ),
        redirect: (context, state) async =>
            await _isAuthenticated() ? null : '/login',
      ),
      GoRoute(
        name: RouteConstants.profilePage,
        path: '/profilePage',
        pageBuilder: (context, state) => const MaterialPage(
          child: ProfilePage(),
        ),
        redirect: (context, state) async =>
            await _isAuthenticated() ? null : '/login',
      ),
    ],
  );
}
