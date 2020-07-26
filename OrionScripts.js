var orionSessionVariables = {
    LoginID: null,
    UserGroupID: null,
    VendorID: null,
    ActionIDs: []
};

var orionStaticValues = {
    airTravel: {
        processingStatusTypes: {
            NoStatus: {
                id: 1,
                name: 'No Status'
            },
            WaitingSubmitApproval: {
                id: 2,
                name: 'Waiting Submit Approval'
            },
            WaitingCancellationApproval: {
                id: 3,
                name: 'Waiting Cancellation Approval'
            },
            BookingRequestSubmitted: {
                id: 4,
                name: 'Booking Request Submitted'
            },
            CancellationRequestSubmitted: {
                id: 5,
                name: 'Cancellation Request Submitted'
            },
            ProcessingBookingRequest: {
                id: 6,
                name: 'Processing Booking Request'
            },
            ProcessingCancellationRequest: {
                id: 7,
                name: 'Processing Cancellation Request'
            },
            Booked: {
                id: 8,
                name: 'Booked'
            },
            Cancelled: {
                id: 9,
                name: 'Cancelled'
            },
            FailedBooking: {
                id: 10,
                name: 'Failed Booking'
            },
            FailedCancellation: {
                id: 11,
                name: 'Failed Cancellation'
            },
            SubmitApprovalRejected: {
                id: 12,
                name: 'Submit Approval Rejected'
            },
            CancellationRequestRejected: {
                id: 13,
                name: 'Cancellation Request Rejected'
            }
        },
        arrangementTypes: {
            noArrangementsNeeded: {
                ID: 0,
                Name: 'No AirTravel Arrangements Needed',
                Description: 'No AirTravel Arrangements Needed',
                IsActive: true
            },
            brandWillArrangeTravel: {
                ID: 0,
                Name: 'Brand will arrange AirTravel',
                Description: 'Brand will arrange AirTravel',
                IsActive: true
            },
            vendorWillArrangeTravel: {
                ID: 0,
                Name: 'Vendor will arrange AirTravel',
                Description: 'Vendor will arrange AirTravel',
                IsActive: true
            }
        },
        timeRanges: {
            Morning: {
                ID: 2,
                altText: 'Morning<br />(6am - Noon)'
            },
            Afternoon: {
                ID: 3,
                altText: 'Afternoon<br />(Noon - 5pm)'
            },
            Evening: {
                ID: 4,
                altText: 'Evening<br />(5pm - after)'
            }
        }
    },
    lodgingData: {
        locationTypes: {
            ByPier: {
                ID: 1,
                Abbrev: 'ByPier',
                Name: 'By Pier',
                Description: 'By Pier'
            },
            ByAirport: {
                ID: 2,
                Abbrev: 'ByAirport',
                Name: 'By Airport',
                Description: 'By Airport'
            },
            NoPreference: {
                ID: 3,
                Abbrev: 'NoPref',
                Name: 'No Preference',
                Description: 'No Preference'
            }
        },
        processingStatusTypes: {
            NoStatus: {
                ID: 1,
                Abbrev: 'NoStatus',
                Name: 'No Status',
                Description: 'No Status'
            },
            Inquiry: {
                ID: 2,
                Abbrev: 'Inquiry',
                Name: 'Inquiry Only',
                Description: 'Inquiry submitted to ascertain availability'
            },
            Tentative: {
                ID: 3,
                Abbrev: 'Tentative',
                Name: 'Tentitive/Potential',
                Description: 'Tentative pending some criteria such as credit check or payment'
            },
            Waitlist: {
                ID: 4,
                Abbrev: 'Waitlist',
                Name: 'WaitListed',
                Description: 'There was no availability for the requested period but traveler is added to the waitlist'
            },
            Declined: {
                ID: 5,
                Abbrev: 'Declined',
                Name: 'Declined',
                Description: 'Reservation was declined due to lack of payment, credit or other condition'
            },
            Cancelled: {
                ID: 6,
                Abbrev: 'Cancelled',
                Name: 'Cancelled',
                Description: 'Reservation was cancelled by traveler'
            },
            Confirmed: {
                ID: 7,
                Abbrev: 'Confirmed',
                Name: 'Confirmed',
                Description: 'Reservation has been held but not yet paid for'
            },
            Guaranteed: {
                ID: 8,
                Abbrev: 'Guaranteed',
                Name: 'Guaranteed',
                Description: 'Reservation has been held AND paid for'
            },
            ModifiedBefore: {
                ID: 9,
                Abbrev: 'ModifiedBefore',
                Name: 'Modified Before',
                Description: 'Confirmed or Guaranteed reservation was modified before check in'
            },
            CheckedIn: {
                ID: 10,
                Abbrev: 'CheckedIn',
                Name: 'Checked In',
                Description: 'Traveler has checked in'
            },
            NoShow: {
                ID: 11,
                Abbrev: 'NoShow',
                Name: 'No Show',
                Description: 'Traveler did not check in within the required time limit'
            },
            ModifiedAfter: {
                ID: 12,
                Abbrev: 'ModifiedAfter',
                Name: 'Modified After',
                Description: 'Reservation was modified after traveler checked in'
            },
            CheckedOut: {
                ID: 13,
                Abbrev: 'CheckedOut',
                Name: 'Checked Out',
                Description: 'Traveler has checked out'
            }
        },
        reviewStatusTypes: {
            NoStatus: {
                ID: 1,
                Abbrev: 'NoStatus',
                Name: 'No Status',
                Description: 'No Status'
            },
            NeedsReview: {
                ID: 2,
                Abbrev: 'NeedsReview',
                Name: 'Needs Review',
                Description: 'Needs Review'
            },
            Approved: {
                ID: 3,
                Abbrev: 'Approved',
                Name: 'Approved',
                Description: 'Approved'
            },
            NeedsAction: {
                ID: 4,
                Abbrev: 'NeedsAction',
                Name: 'Needs Action',
                Description: 'Review determined action is required'
            },
            Rejected: {
                ID: 5,
                Abbrev: 'Rejected',
                Name: 'Rejected',
                Description: 'Rejected'
            },
            ManagerRequired: {
                ID: 6,
                Abbrev: 'ManagerRequired',
                Name: 'Manager Required',
                Description: 'Requires Manager review'
            }
        },
        roomingType: {
            NoPreference: {
                ID: 1,
                Abbrev: 'NoPref',
                Name: 'No Preference',
                Description: 'No Preference has been set'
            },
            Single: {
                ID: 2,
                Abbrev: 'Single',
                Name: 'Single',
                Description: 'Single room lodging required'
            },
            Double: {
                ID: 3,
                Abbrev: 'Double',
                Name: 'Double',
                Description: 'Double room lodging required'
            }
        }
    },
    security: {
        actions: {
            ProjectCreate: {
                ID: 200,
                Name: 'CreateProject',
                Description: 'Create Project'
            },
            ProjectDelete: {
                ID: 201,
                Name: 'DeleteProject',
                Description: 'Delete Project'
            },
            ProjectEdit: {
                ID: 219,
                Name: 'EditProject',
                Description: 'Edit Project'
            },
            VendorCreate: {
                ID: 202,
                Name: 'CreateVendor',
                Description: 'Create Vendor'
            },
            VendorDelete: {
                ID: 203,
                Name: 'DeleteVendor',
                Description: 'Delete Vendor'
            },
            VendorEdit: {
                ID: 220,
                Name: 'EditVendor',
                Description: 'Edit Vendor'
            },
            EmployeeCreate: {
                ID: 204,
                Name: 'CreateEmployee',
                Description: 'Create Employee'
            },
            EmployeeDelete: {
                ID: 205,
                Name: 'CreateEmployee',
                Description: 'Create Employee'
            },
            EmployeeEdit: {
                ID: 221,
                Name: 'EditEmployee',
                Description: 'Edit Employee'
            },
            UserCreate: {
                ID: 206,
                Name: 'CreateUser',
                Description: 'Create User'
            },
            UserDelete: {
                ID: 207,
                Name: 'DeleteUser',
                Description: 'Delete User'
            },
            UserEdit: {
                ID: 222,
                Name: 'EditUser',
                Description: 'Edit User'
            },
            AssignVendors: {
                ID: 208,
                Name: 'AssignVendors',
                Description: 'Assign Vendors to Project'
            },
            AssignEmployees: {
                ID: 209,
                Name: 'AssignEmployees',
                Description: 'Assign Employees to Project'
            },
            ViewTravelRequestInfo: {
                ID: 210,
                Name: 'ViewTravelRequestInfo',
                Description: 'View Travel Request Info'
            },
            EditTravelRequestInfo: {
                ID: 211,
                Name: 'EditTravelRequestInfo',
                Description: 'Edit Travel Request Info'
            },
            ViewPendingCoordinatorReviewGrid: {
                ID: 212,
                Name: 'ViewPendingCoordinatorReviewGrid',
                Description: 'View Pending Coordinator Review Grid'
            },
            ViewAllPendingRequestsGrid: {
                ID: 213,
                Name: 'ViewAllPendingRequestsGrid',
                Description: 'View All Pending Requests Grid'
            },
            ViewPendingFlightRequestsGrid: {
                ID: 214,
                Name: 'ViewPendingFlightRequestsGrid',
                Description: 'View Pending Flight Requests Grid'
            },
            ViewPendingLodgingRequestsGrid: {
                ID: 215,
                Name: 'ViewPendingLodgingRequestsGrid',
                Description: 'View Pending Lodging Requests Grid'
            },
            ViewPendingTransferRequestsGrid: {
                ID: 216,
                Name: 'ViewPendingTransferRequestsGrid',
                Description: 'View Pending Transfer Requests Grid'
            },
            UpdateUserGroupPermissions: {
                ID: 217,
                Name: 'UpdateUserGroupPermissions',
                Description: 'Update User Group Permissions'
            },
            SettingsAccess: {
                ID: 218,
                Name: 'SettingsAccess',
                Description: 'Settings Access'
            },
            ExpiringPassportsReport: {
                ID: 300,
                Name: 'Report - Expiring Passports',
                Description: 'Report - Expiring Passports'
            },
            FlightsReport: {
                ID: 301,
                Name: 'Report - Flights',
                Description: 'Report - Flights'
            },
            HotelRequestsReport: {
                ID: 302,
                Name: 'Report - Hotel Requests',
                Description: 'Report - Hotel Requests'
            },
            TransferRequestsReport: {
                ID: 303,
                Name: 'Report - Transfer Requests',
                Description: 'Report - Transfer Requests'
            },
            EditLodgingReviewStatus: {
                ID: 223,
                Name: 'EditLodgingReviewStatus',
                Description: 'Update Lodging Review Status'
            },
            EditTransferReviewStatus: {
                ID: 224,
                Name: 'EditTransferReviewStatus',
                Description: 'Update Transfer Review Status'
            }
        },
        userGroups: {
            NoAccess: {
                ID: 0,
                Name: 'No Access',
                Description: '',
                IsActive: true
            },
            SuperUser: {
                ID: 1,
                Name: 'Super User',
                Description: '',
                IsActive: true
            },
            TravelServicesManagement: {
                ID: 2,
                Name: 'Travel Services Management',
                Description: '',
                IsActive: true
            },
            TravelServicesAgent: {
                ID: 3,
                Name: 'Travel Services Agent',
                Description: '',
                IsActive: true
            },
            CompanyTravelAdministrator: {
                ID: 4,
                Name: 'Company Travel Administrator',
                Description: '',
                IsActive: true
            },
            TravelCoordinator: {
                ID: 5,
                Name: 'Travel Coordinator',
                Description: '',
                IsActive: true
            },
            MAPSAPIUser: {
                ID: 6,
                Name: 'MAPS API User',
                Description: '',
                IsActive: true
            },
            PathfinderQIKService: {
                ID: 7,
                Name: 'Pathfinder QIK Service',
                Description: '',
                IsActive: true
            }
        }
    },
    processingStatusTypes: {
        NoStatus: {
            id: 1,
            name: 'No Status'
        },
        WaitingSubmitApproval: {
            id: 2,
            name: 'Waiting Submit Approval'
        },
        WaitingCancellationApproval: {
            id: 3,
            name: 'Waiting Cancellation Approval'
        },
        BookingRequestSubmitted: {
            id: 4,
            name: 'Booking Request Submitted'
        },
        CancellationRequestSubmitted: {
            id: 5,
            name: 'Cancellation Request Submitted'
        },
        ProcessingBookingRequest: {
            id: 6,
            name: 'Processing Booking Request'
        },
        ProcessingCancellationRequest: {
            id: 7,
            name: 'Processing Cancellation Request'
        },
        Booked: {
            id: 8,
            name: 'Booked'
        },
        Cancelled: {
            id: 9,
            name: 'Cancelled'
        },
        FailedBooking: {
            id: 10,
            name: 'Failed Booking'
        },
        FailedCancellation: {
            id: 11,
            name: 'Failed Cancellation'
        },
        SubmitApprovalRejected: {
            id: 12,
            name: 'Submit Approval Rejected'
        },
        CancellationRequestRejected: {
            id: 13,
            name: 'Cancellation Request Rejected'
        }
    },
    projectTypeIDs: {
        DayToDay: {
            id: 1,
            name: 'Day-to-Day'
        },
        Drydock: {
            id: 2,
            name: 'Drydock'
        }
    },
    reportTypes: {
        flights: {
            ID: 1,
            Name: 'Flights',
            Description: 'Flights'
        },
        expiringPassports: {
            ID: 5,
            Name: 'ExpiringPassports',
            Description: 'Expiring Passports'
        },
        hotelRequests: {
            ID: 14,
            Name: 'HotelRequests',
            Description: 'Hotel Requests'
        },
        transferRequests: {
            ID: 15,
            Name: 'TransferRequests',
            Description: 'Transfer Requests'
        }
    },
    tradeIDs: {
        ContractorEmployee: 201,
        ContractorProjectManager: 202,
        ContractorOwner: 203,
        HAGroupEmployee: 204,
        LogisticsTeam: 205,
        ShipyardTeam: 207,
        VicePresident_President: 211,
        Technicians_Inspector_Supervisor: 213,
        Superintendents_Engineers: 214,
        Surveyors: 215,
        Welder_PipeFitter_Electrician: 216,
        ContractorSupervisor: 217,
        AllBrandsGroupSupervisor: 218
    },
    transferData: {
        transitTypes: {
            join: {
                AirportToHotel: {
                    ID: 1,
                    altText: ' Transfer from Airport to Hotel'
                },
                HotelToPier: {
                    ID: 2,
                    altText: ' Transfer from Hotel to Pier'
                },
                AirportToPier: {
                    ID: 3,
                    altText: ' Transfer from Airport direct to Pier'
                }
            },
            leave: {
                PierToHotel: {
                    ID: 4,
                    altText: ' Transfer from Pier to Hotel'
                },
                HotelToAirport: {
                    ID: 5,
                    altText: ' Transfer from Hotel to Airport'
                },
                PierToAirport: {
                    ID: 6,
                    altText: ' Transfrom from Pier direct to Airport'
                }
            }
        }
    },
    travelDirections: {
        Join: 'J',
        Leave: 'L'
    },
    userGroupIDs: {
        NoAccess: 0,
        SuperUser: 1,
        TravelServicesManagement: 2,
        TravelServicesAgent: 3,
        CompanyTravelAdministrator: 4,
        TravelCoordinator: 5,
        MAPSAPIUser: 6,
        PathfinderQIKService: 7
    },
    viewModels: {
        TravelRequest: {
            id: 'ID',
            fields: {
                ID: { field: "ID", type: "number" },
                ProcessingStatusTypeName: { field: "ProcessingStatusTypeName", type: "text" },
                LastName: { field: "LastName", type: "text" },
                FirstName: { field: "FirstName", type: "text" },
                ProjectName: { field: "ProjectName", type: "text" },
                TravelDirection: { field: "TravelDirection", type: "text" },
                ArrivalDate: { field: "ArrivalDate", type: "date" },
                DepartureDate: { field: "DepartureDate", type: "date" }
            }
        },
        LodgingRequest: {
            id: 'ID',
            fields: {
                ID: { field: "ID", type: "number" },
                LastName: { field: "LastName", type: "text" },
                FirstName: { field: "FirstName", type: "text" },
                ReviewStatusTypeName: { field: "ReviewStatusTypeName", type: "text" },
                TravelDirection: { field: "TravelDirection", type: "text" },
                LocationTypeName: { field: "LocationTypeName", type: "text" },
                RoomingTypeName: { field: "RoomingTypeName", type: "text" }
            }
        }
    },
    visaTypeIDs: {
        None: 1,
        GreenCard: 2,
        B1: 3,
        B2: 4,
        B1B2: 5,
        C1: 6,
        C1D: 7,
        D: 8,
        D1: 9,
        H1B: 10,
        H2B: 11,
        ARC: 12,
        Other: 13,
        L1: 16
    }
};

var orionButtons = {
    btn_CreateProject: {
        onClick: function (e) {
            orionGrids.grid_Projects.loadedProject = null;
            fts.openWindow(orionWindows.window_ProjectInfo);
            orionInfoViews.projectInfoView.load();
        },
        toolTip: 'Create New Project'
    },
    btn_DeleteProject: {
        onClick: function (e) {
            var row = fts.getGridRowOfClickedButton(e);
            if (confirm("Are you sure you want to delete this Project?")) {
                $.ajax({
                    type: "POST",
                    data: {
                        projectID: row.ID
                    },
                    url: "Grid/DeleteProject",
                    success: function (deletedProject) {
                        fts.getWidgetByRoot(orionGrids.grid_Projects).removeRow(fts.rowOfClickedButton);
                        fts.rowOfClickedButton = null;
                        orionElements.notification_Orion.show("Project deleted");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Grid/DeleteProject\nAn error occurred... Check the (F12) for more information!");
                    }
                });
            }
        }
    },
    btn_EditProject: {
        onClick: function (e) {
            orionGrids.grid_Projects.loadedProject = fts.getGridRowOfClickedButton(e);
            fts.openWindow(orionWindows.window_ProjectInfo);
            orionInfoViews.projectInfoView.load();
        }
    },
    btn_SaveProject: {
        onClick: function (e) {
            orionInfoViews.projectInfoView.save();
        },
        toolTip: 'Save Project'
    },
    btn_CreateVendor: {
        onClick: function (e) {
            orionGrids.grid_Vendors.loadedVendor = null;
            orionInfoViews.vendorInfoView.load();
        },
        toolTip: 'Create New Vendor'
    },
    btn_DeleteVendor: {
        onClick: function (e) {
            console.log('orionButtons.btn_DeleteVendor.onClick');
            var row = fts.getGridRowOfClickedButton(e);
            if (confirm("Are you sure you want to delete this Vendor?")) {
                $.ajax({
                    type: "POST",
                    data: {
                        vendorID: row.ID
                    },
                    url: "Grid/DeleteVendor",
                    success: function (deletedVendor) {
                        fts.getWidgetByRoot(orionGrids.grid_Vendors).removeRow(fts.rowOfClickedButton);
                        fts.rowOfClickedButton = null;
                        orionElements.notification_Orion.show("Vendor deleted");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Grid/DeleteVendor\nAn error occurred... Check the (F12) for more information!");
                    }
                });
            }
        }
    },
    btn_EditVendor: {
        onClick: function (e) {
            orionGrids.grid_Vendors.loadedVendor = fts.getGridRowOfClickedButton(e);
            orionInfoViews.vendorInfoView.load();
        }
    },
    btn_SaveVendor: {
        onClick: function (e) {
            orionInfoViews.vendorInfoView.save();
        },
        toolTip: 'Save Vendor'
    },
    btn_CreateEmployee: {
        onClick: function (e) {
            orionInfoViews.employeeInfoView.itemBeingEdited = null;
            fts.openWindow(orionWindows.window_EmployeeInfo);
            orionInfoViews.employeeInfoView.load();
        },
        toolTip: 'Create New Employee'
    },
    btn_EditEmployee: {
        onClick: function (e) {
            orionInfoViews.employeeInfoView.itemBeingEdited = fts.getGridRowOfClickedButton(e);
            fts.openWindow(orionWindows.window_EmployeeInfo);
            orionInfoViews.employeeInfoView.load();
        }
    },
    btn_SaveEmployee: {
        onClick: function (e) {
            orionInfoViews.employeeInfoView.save();
        },
        toolTip: 'Save Employee'
    },
    btn_DeleteEmployee: {
        onClick: function (e) {
            var row = fts.getGridRowOfClickedButton(e);
            if (confirm("Are you sure you want to delete this employee?")) {
                $.ajax({
                    type: "POST",
                    data: {
                        employeeID: row.ID
                    },
                    url: "Grid/RemoveEmployee",
                    success: function (employeeInfoView) {
                        fts.getWidgetByRoot(orionGrids.grid_Employees).removeRow(fts.rowOfClickedButton);
                        fts.rowOfClickedButton = null;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Grid/RemoveEmployee\nAn error occurred... Check the (F12) for more information!");
                    }
                });
            }
        }
    },
    btn_CreateUser: {
        onClick: function (e) {
            orionGrids.grid_Users.loadedUser = null;
            orionInfoViews.userInfoView.load();
        },
        toolTip: 'Create New User'
    },
    btn_EditUser: {
        onClick: function (e) {
            orionGrids.grid_Users.loadedUser = fts.getGridRowOfClickedButton(e);
            orionInfoViews.userInfoView.load();
        }
    },
    btn_SaveUser: {
        onClick: function (e) {
            orionInfoViews.userInfoView.save();
        },
        toolTip: 'Save User'
    },
    btn_DeleteUser: {
        onClick: function (e) {
            if (confirm('Are you sure you want to delete this user?')) {
                var row = fts.getGridRowOfClickedButton(e);
                $.ajax({
                    type: 'POST',
                    data: {
                        userID: row.ID
                    },
                    url: 'Grid/RemoveUser',
                    success: function (userInfoView) {
                        var grid = fts.getWidgetByRoot(orionGrids.grid_Users);
                        grid.removeRow(fts.rowOfClickedButton);
                        fts.rowOfClickedButton = null;
                        orionElements.notification_Orion.show("User deleted");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Grid/RemoveUser\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            }
        }
    },
    btn_CreateEmployeeProjectAssignments:
    {
        onClick: function (e) {
            var multiselect = orionInputs.multiselect_AssignEmployeesToProject;
            var selection = fts.getElement(orionGrids.grid_Projects).find('tr.k-state-selected');
            if (selection.length > 0) {
                var employeeIDs = fts.value(multiselect);
                if (employeeIDs.length > 0) {
                    var gridItems = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments).items();
                    var employeesAssigned = new Array();
                    $.each(gridItems, function (index, value) {
                        if (!$(value).hasClass('k-no-data')) {
                            employeesAssigned.push(value);
                        }
                    });


                    if (employeesAssigned.length + employeeIDs.length > orionGrids.grid_Projects.selectedProject.MaximumAllowedContractorCount) {
                        alert('Adding employees will exceed the maximum allowed of ' +
                            orionGrids.grid_Projects.selectedProject.MaximumAllowedContractorCount + '! Please modify to be under the maximum allowed of ' + orionGrids.grid_Projects.selectedProject.MaximumAllowedContractorCount + '.');
                    }
                    else {
                        var projectID = orionGrids.grid_Projects.selectedProject.ID;
                        var vendorID = orionGrids.grid_Projects.selectedProject.VendorID;

                        $.ajax({
                            type: 'POST',
                            url: 'Grid/AssignEmployeesToProject',
                            data: {
                                employeeIDs: employeeIDs,
                                projectID: projectID,
                                vendorID: vendorID
                            },
                            success: function (result) {
                                var firstInfoView = result.Data[0];
                                if (firstInfoView !== undefined) {
                                    var newEmployees = firstInfoView.NewEmployeeNames;
                                    var existingEmployees = firstInfoView.ExistingEmployeeNames;
                                    if (newEmployees !== '') {
                                        var employeeProjectAssignmentsGrid = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments);
                                        for (var i = 0; i < result.Data.length; i++) {
                                            var row = result.Data[i];
                                            employeeProjectAssignmentsGrid.dataSource.add({
                                                ID: row.ID,
                                                ProjectID: row.ProjectID,
                                                EmployeeID: row.EmployeeID,
                                                FirstName: row.FirstName,
                                                LastName: row.LastName,
                                                FullName: row.FirstName + ' ' + row.LastName,
                                                GenderCode: row.GenderCode,
                                                TradeID: row.TradeID,
                                                TradeName: row.TradeName,
                                                RoomingTypeID: row.RoomingTypeID,
                                                RoomingTypeName: row.RoomingTypeName,
                                                Notes: row.Notes,
                                                JoinRequestID: row.JoinRequestID,
                                                LeaveRequestID: row.LeaveRequestID,
                                                IsActive: row.IsActive
                                            });
                                        }
                                        var selectedProjectRow = fts.getElement(orionGrids.grid_Projects).find('tr.k-state-selected');

                                        var projectDataItem = fts.getWidgetByRoot(orionGrids.grid_Projects).dataItem(selectedProjectRow);
                                        projectDataItem.set('QtyEmployeesAssigned', orionGrids.grid_Projects.selectedProject.QtyEmployeesAssigned + result.Data.length);
                                        //alert('The following employees have been assigned to this project:\n' + newEmployees);
                                    }
                                }
                                if (existingEmployees !== null && existingEmployees !== '') {
                                    //alert('The following employees are already assigned to this project:\n' + existingEmployees);
                                }
                                fts.value(orionInputs.multiselect_AssignEmployeesToProject, 'ftsReset');
                                fts.getWidgetByRoot(orionInputs.multiselect_AssignEmployeesToProject).dataSource.read();
                                orionElements.notification_Orion.show('Employee(s) assigned to project');
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Grid/AssignEmployeesToProject\nAn error occurred... Check the console (F12) for more information!');
                            }
                        });
                    }

                }
                else {
                    alert('No employee(s) selected!');
                }
            }
            else {
                alert('No project selected!');
            }
        },
        toolTip: 'Assign Employee(s) to Project'
    },
    btn_EditEmployeeProjectAssignment: {
        onClick: function (e) {
            orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = fts.getGridRowOfClickedButton(e);
            orionWindows.window_EmployeeProjectAssignment.open();
        }
    },
    btn_DeleteEmployeeProjectAssignment: {
        onClick: function (e) {
            orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = fts.getGridRowOfClickedButton(e);
            if (confirm('Are you sure you want to remove this employee from the project?')) {
                $.ajax({
                    type: 'POST',
                    data: {
                        employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID
                    },
                    url: 'Grid/RemoveEmployeeProjectAssignment',
                    success: function (employeeProjectAssignment) {
                        var grid = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments);
                        grid.removeRow(fts.rowOfClickedButton);
                        fts.rowOfClickedButton = null;
                        orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = null;
                        orionElements.notification_Orion.show('Employee removed from project');
                        orionInfoViews.travelGridsView.refreshTravelGrids();
                        
                        fts.getWidgetByRoot(orionInputs.multiselect_AssignEmployeesToProject).dataSource.read();

                        var selectedProjectRow = fts.getGridRowsByKeyValue(fts.getID(orionGrids.grid_Projects), 'ID', orionGrids.grid_Projects.selectedProject.ID);
                        selectedProjectRow.set('QtyEmployeesAssigned', orionGrids.grid_Projects.selectedProject.QtyEmployeesAssigned - 1);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Grid/RemoveEmployeeProjectAssignment\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            }
        }
    },
    btn_CreateVendorProjectAssignments: {
        onClick: function (e) {
            var vendorProjectAssignmentGrid = fts.getWidgetByRoot(orionGrids.grid_VendorProjectAssignments);
            var vendorsAssignedToProject = vendorProjectAssignmentGrid.items();
            if (orionGrids.grid_Projects.selectedProject.ProjectTypeID === orionStaticValues.projectTypeIDs.DayToDay && vendorsAssignedToProject.length >= 1) {
                alert('A vendor is already assigned to this project (day-to-day projects are limited to one vendor each)');
            }
            else {
                var projectsGrid = fts.getWidgetByRoot(orionGrids.grid_Projects);
                var selectedRow = projectsGrid.select();
                if (selectedRow.length > 0) {
                    var vendorIDs = [fts.value(orionInputs.ddl_ActiveVendors)];
                    if (vendorIDs.length > 0) {
                        var dataItem = projectsGrid.dataItem(selectedRow);
                        var projectID = dataItem.ID;

                        $.ajax({
                            type: 'POST',
                            url: 'Grid/AssignVendorsToProject',
                            data: {
                                vendorIDs: vendorIDs,
                                projectID: projectID
                            },
                            success: function (vendorProjectAssignmentInfoViews) {
                                var firstInfoView = vendorProjectAssignmentInfoViews.Data[0];
                                var newVendors = firstInfoView.NewVendorNames;
                                var existingVendors = firstInfoView.ExistingVendorNames;
                                // If any new VendorProjectAssignments were created, add them to the grid
                                if (newVendors !== '') {
                                    var grid = fts.getWidgetByRoot(orionGrids.grid_VendorProjectAssignments);
                                    //grid.dataSource.read();
                                    for (var m = 0; m < vendorProjectAssignmentInfoViews.Data.length; m++) {
                                        var row = vendorProjectAssignmentInfoViews.Data[m];
                                        grid.dataSource.add({
                                            ID: row.ID,
                                            VendorID: row.VendorID,
                                            ProjectID: row.ProjectID,
                                            VendorName: row.VendorName,
                                            IsActive: row.IsActive,
                                            QtyEmployeesAssigned: row.QtyEmployeesAssigned,
                                            QtyTravelRequestsCompleted: row.QtyTravelRequestsCompleted,
                                            QtyTravelRequestsPending: row.QtyTravelRequestsPending
                                        });
                                    }
                                    var projectsGrid = fts.getWidgetByRoot(orionGrids.grid_Projects);
                                    var selectedProjectRow = fts.getSelectedGridRow(fts.getID(orionGrids.grid_Projects));
                                    var projectDataItem = projectsGrid.dataItem(selectedProjectRow);
                                    $(projectDataItem.set('VendorID', row.VendorID));
                                    $(projectDataItem.set('VendorName', row.VendorName));

                                    orionElements.notification_Orion.show('Vendor(s) assigned to project');
                                }
                                if (existingVendors !== null && existingVendors !== '') {
                                    var existingAlertText = 'The following vendors are already assigned to this project:\n' + existingVendors;
                                    //alert(existingAlertText);
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Grid/AssignVendorsToProject\nAn error occurred... Check the console (F12) for more information!');
                            }
                        });
                    }
                    else {
                        alert('No vendor(s) selected!');
                    }
                }
                else {
                    alert('No project selected!');
                }
            }
        },
        toolTip: 'Assign Vendor to Project'
    },
    btn_EditVendorProjectAssignment: {
        onClick: function (e) {
            orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment = fts.getGridRowOfClickedButton(e);
            orionWindows.window_VendorProjectAssignment.onOpen(e);
        }
    },
    btn_DeleteVendorProjectAssignment: {
        onClick: function (e) {
            var row = fts.getGridRowOfClickedButton(e);
            if (confirm('This Vendor has Employees assigned to this Project. Are you sure you want to remove this Vendor from the Project, as well as all associated Employee Project Assignments?')) {
                $.ajax({
                    type: 'POST',
                    data: {
                        vendorProjectAssignmentID: row.ID
                    },
                    url: 'Grid/RemoveVendorProjectAssignment',
                    success: function (vendorProjectAssignment) {
                        fts.getWidgetByRoot(orionGrids.grid_VendorProjectAssignments).removeRow(fts.rowOfClickedButton);
                        var projectsGrid = fts.getWidgetByRoot(orionGrids.grid_Projects);
                        var selectedProjectRow = fts.getSelectedGridRow(fts.getID(orionGrids.grid_Projects));
                        var projectsDataItem = projectsGrid.dataItem(selectedProjectRow);
                        $(projectsDataItem.set('VendorName', ''));
                        fts.rowOfClickedButton = null;
                        orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment = null;
                        orionGrids.grid_EmployeeProjectAssignments.reset();
                        orionElements.notification_Orion.show('Vendor removed from Project');
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Grid/RemoveVendorProjectAssignment\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            }
        }
    },
    btn_SaveJoinFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_JoinRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name) {
                alert('Requests with status "Waiting Submit Approval" cannot be updated');
            }
            else if (fts.isNull(fts.value(orionInputs.datepicker_JoinArrivalDate))) {
                alert('Arrival Date cannot be blank');
            }
            else {
                orionInfoViews.travelRequestInfoView.save('join');
            }
        },
        toolTip: 'Save Flight Request (Arrival/JOIN)'
    },
    btn_SubmitJoinFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_JoinRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name) {
                alert('Request has already been submitted');
            }
            else if (fts.isNull(fts.value(orionInputs.datepicker_JoinArrivalDate))) {
                alert('Arrival Date cannot be blank');
            }
            else {
                orionInfoViews.travelRequestInfoView.submit('join');
            }
        },
        toolTip: 'Submit Request to Travel Coordinator (Arrival/JOIN)'
    },
    btn_CancelJoinFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_JoinRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name &&
                orionSessionVariables.UserGroupID === orionStaticValues.security.userGroups.CompanyTravelAdministrator.ID) {
                alert('Requests with status "Waiting Submit Approval" cannot be cancelled');
            }
            else {
                if (confirm('Submit Arrival/JOIN Travel Request for Cancellation?')) {
                    orionInfoViews.travelRequestInfoView.cancel('join');
                }
            }
        },
        toolTip: 'Submit Cancellation Request (Arrival/JOIN)'
    },
    btn_SaveLeaveFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_LeaveRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name) {
                alert('Requests with status "Waiting Submit Approval" cannot be updated');
            }
            else if (fts.isNull(fts.value(orionInputs.datepicker_LeaveDepartureDate))) {
                alert('Departure Date cannot be blank');
            }
            else {
                orionInfoViews.travelRequestInfoView.save('leave');
            }
        },
        toolTip: 'Save Flight Request (Departure/LEAVE)'
    },
    btn_SubmitLeaveFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_LeaveRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name) {
                alert('Request has already been submitted');
            }
            else if (fts.isNull(fts.value(orionInputs.datepicker_LeaveDepartureDate))) {
                alert('Departure Date cannot be blank');
            }
            else {
                orionInfoViews.travelRequestInfoView.submit('leave');
            }
        },
        toolTip: 'Submit Request to Travel Coordinator (Departure/LEAVE)'
    },
    btn_CancelLeaveFlight: {
        onClick: function (e) {
            var statusName = fts.value(orionInputs.textbox_LeaveRequestStatus);
            if (statusName === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.name) {
                alert('Requests with status "Waiting Submit Approval" cannot be cancelled');
            }
            else {
                if (confirm('Submit Departure/LEAVE Travel Request for Cancellation?')) {
                    orionInfoViews.travelRequestInfoView.cancel('leave');
                }
            }
        },
        toolTip: 'Submit Cancellation Request (Departure/LEAVE)'
    },
    btn_ApproveRequestPendingReview: {
        onClick: function (e) {
            var request = fts.getGridRowOfClickedButton(e);
            var method = request.ProcessingStatusTypeID === orionStaticValues.airTravel.processingStatusTypes.WaitingCancellationApproval.id
                ? 'approveCancellationRequest' : 'approveRequest';
            orionInfoViews.travelGridsView[method](request.ID);
        }
    },
    btn_RejectRequestPendingReview: {
        onClick: function (e) {
            var request = fts.getGridRowOfClickedButton(e);
            var reason = prompt('Please enter rejection reason!');
            if (!fts.isNull(reason)) {
                var method = request.ProcessingStatusTypeID === orionStaticValues.airTravel.processingStatusTypes.WaitingCancellationApproval.id
                    ? 'rejectCancellationRequest' : 'rejectRequest';
                orionInfoViews.travelGridsView[method](request.ID, reason);
            }
            else {
                if (reason !== null) //Due to user selecting cancel which should not prompt message
                {
                    alert("Rejection Reason Required");
                }
            }
        }
    },
    btn_EditTravelGrids: {
        onClick: function (e) {
            var clickedRow = fts.getGridRowOfClickedButton(e);
            var grid = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments);
            var rows = grid.items();
            var matchingRow = null;
            $.each(rows, function (index, row) {
                if (matchingRow === null) {
                    var dataItem = grid.dataItem(row);
                    var requestID = clickedRow.TravelDirection === 'J' ? dataItem.JoinRequestID : dataItem.LeaveRequestID;
                    if (clickedRow.ID === requestID) {
                        matchingRow = dataItem;
                    }
                }
            });
            if (matchingRow === null) {
                console.log('error: Travel Grids "Edit" button clicked, but no matching row found on grid_EmployeeProjectAssignments');
            }
            else {
                orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = matchingRow;
                orionWindows.window_EmployeeProjectAssignment.open();
            }
        }
    },
    btn_CreatePassport: {
        onClick: function (e) {
            if (!orionInfoViews.employeeInfoView.itemBeingEdited) {
                alert('Employee info must be saved before adding a new Passport');
            }
            else {
                orionElements.toolbar_EmployeePassports.toggle('create');
            }
        },
        toolTip: 'Create New Passport'
    },
    btn_SavePassport: {
        onClick: function (e) {
            orionInfoViews.infoview_Passport.save();
        },
        toolTip: 'Save Passport'
    },
    btn_EditPassport: {
        onClick: function (e) {
            if (fts.value(orionInputs.ddl_EmployeePassports) !== null) {
                orionElements.toolbar_EmployeePassports.toggle('edit');
            }
        },
        toolTip: 'Edit Passport'
    },
    btn_DeletePassport: {
        onClick: function (e) {
            if (confirm('Are you sure you want to delete this Passport?')) {
                var root = orionInfoViews.infoview_Passport;
                root.itemBeingEdited = fts.buildObjectByFieldList(orionInfoViews.infoview_Passport.viewModelFields);
                root.itemBeingEdited.PassportID = fts.value(orionInputs.ddl_EmployeePassports);
                //root.itemBeingEdited.EmployeeID = orionInfoViews.employeeInfoView.itemBeingEdited.ID;
                root.itemBeingEdited.EmployeeID = orionInfoViews.employeeInfoView.itemBeingEdited.ID;
                root.itemBeingEdited.IsActive = false;
                root.itemBeingEdited.PassportNumber = fts.value(orionInputs.textbox_PassportNumber);
                root.itemBeingEdited.CountryID = fts.value(orionInputs.ddl_PassportCountry);
                root.itemBeingEdited.IssueDate = fts.value(orionInputs.datepicker_PassportIssueDate);
                root.itemBeingEdited.ExpirationDate = fts.value(orionInputs.datepicker_PassportExpirationDate);

                if (fts.validation(root)) {
                    root.upsert(root.itemBeingEdited);
                }
            }
        },
        toolTip: 'Delete Passport'
    },
    btn_CancelPassportEditing: {
        onClick: function (e) {
            fts.resetInputs(orionInfoViews.infoview_Passport.inputs());
            orionInfoViews.infoview_Passport.disableInputs();
            orionElements.toolbar_EmployeePassports.toggle();
        },
        toolTip: 'Cancel (Discard Changes)'
    },
    btn_CreateVisa: {
        onClick: function (e) {
            if (!orionInfoViews.employeeInfoView.itemBeingEdited) {
                alert('Employee info must be saved before adding a new Visa');
            }
            else {
                orionElements.toolbar_EmployeeVisas.toggle('create');
            }
        },
        toolTip: 'Create New Visa'
    },
    btn_SaveVisa: {
        onClick: function (e) {
            orionInfoViews.infoview_Visa.save();
        },
        toolTip: 'Save Visa'
    },
    btn_EditVisa: {
        onClick: function (e) {
            if (fts.value(orionInputs.ddl_EmployeeVisas) !== null) {
                orionElements.toolbar_EmployeeVisas.toggle('edit');
            }
        },
        toolTip: 'Edit Visa'
    },
    btn_DeleteVisa: {
        onClick: function (e) {
            if (confirm('Are you sure you want to delete this Visa?')) {
                var root = orionInfoViews.infoview_Visa;
                root.itemBeingEdited = fts.buildObjectByFieldList(orionInfoViews.infoview_Visa.viewModelFields);
                root.itemBeingEdited.VisaID = fts.value(orionInputs.ddl_EmployeeVisas);
                root.itemBeingEdited.EmployeeID = orionInfoViews.employeeInfoView.itemBeingEdited.ID;
                root.itemBeingEdited.IsActive = false;
                root.itemBeingEdited.VisaNumber = fts.value(orionInputs.textbox_VisaNumber);
                root.itemBeingEdited.IssuingOffice = fts.value(orionInputs.textbox_VisaIssuingOffice);
                root.itemBeingEdited.CountryID = fts.value(orionInputs.ddl_VisaCountryID);
                root.itemBeingEdited.ValidFromDate = fts.value(orionInputs.datepicker_VisaValidFromDate);
                root.itemBeingEdited.ValidToDate = fts.value(orionInputs.datepicker_VisaValidToDate);
                root.itemBeingEdited.VisaTypeID = fts.value(orionInputs.ddl_VisaTypeID);
                root.itemBeingEdited.OtherVisaType = fts.value(orionInputs.textbox_VisaOtherVisaType);

                if (fts.validation(root)) {
                    root.upsert(root.itemBeingEdited);
                }
            }
        },
        toolTip: 'Delete Visa'
    },
    btn_CancelVisaEditing: {
        onClick: function (e) {
            fts.resetInputs(orionInfoViews.infoview_Visa.inputs());
            orionInfoViews.infoview_Visa.disableInputs();
            orionElements.toolbar_EmployeeVisas.toggle();
        },
        toolTip: 'Cancel (Discard Changes)'
    },
    btn_EmployeephotoRemove: {
        onClick: function (e) {
        }
    },
    btn_SaveUserGroupActions: {
        onClick: function (e) {
            var userGroupID = fts.value(orionInputs.ddl_SettingsUserGroups);
            var actionIDs = [];
            var checkboxes = orionInfoViews.infoview_UserGroups.inputs();
            $.each(checkboxes, function (index, checkbox) {
                var isChecked = checkbox.checked;
                if (isChecked) {
                    var split = parseInt(checkbox.id.split('checkbox_Actions')[1]);
                    actionIDs.push(split);
                }
            });
            $.ajax({
                type: 'POST',
                traditional: true,
                data: {
                    userGroupID: userGroupID,
                    actionIDs: actionIDs
                },
                url: 'Settings/SaveActionsForUserGroup',
                success: function (results) {
                    $.each(results, function (key, value) {
                        var checkbox = $('#checkbox_Actions' + value.ActionID);
                        checkbox[0].checked = value.IsActive;
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Settings/SaveActionsForUserGroup\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        }
    },
    btn_ReportsSearch: {
        onClick: function (e) {
            var projectID = fts.value(orionInputs.ddl_ReportProjects);
            var reportTypeID = fts.value(orionInputs.ddl_ReportTypes);

            var alertText = '';
            if (fts.isNull(projectID)) {
                alertText = alertText + 'There is no Project selected\n';
            }
            if (fts.isNull(reportTypeID)) {
                alertText = alertText + 'There is no Report Type selected\n';
            }
            if (alertText !== '') {
                alert(alertText);
            }
            else {
                var reportTypeName = null;
                $.each(orionStaticValues.reportTypes, function (reportType, values) {
                    if (reportTypeName === null) {
                        if (reportTypeID === values.ID) {
                            reportTypeName = values.Name;
                        }
                    }
                });
                var gridID = 'grid_Report' + reportTypeName;
                var reportWrapperID = '#reportwrapper_' + reportTypeName;
                fts.getWidgetByRoot(orionGrids[gridID]).dataSource.read();
                $('.ftsReportWrapper').attr('style', 'display: none');
                $(reportWrapperID).attr('style', 'display: inline-block');
                $('#pagewrapper_Reports > div.ftsContent').css('height', 'calc(100% - 81px)');
            }

        },
        toolTip: 'Search'
    },
    btn_ReportsExport: {
        onClick: function (e) {
            console.log('orionButtons.btn_ReportsExport.onClick');
            var reportWrappers = $('.ftsReportWrapper');
            var activeReportWrapper = null;
            $.each(reportWrappers, function (index, reportWrapper) {
                if (activeReportWrapper === null) {
                    var displayAttribute = $(reportWrapper).css('display');
                    if (displayAttribute !== 'none') {
                        activeReportWrapper = reportWrapper;
                    }
                }
            });
            if (activeReportWrapper !== null) {
                var grid = $('#' + activeReportWrapper.id + ' .k-grid');
                var gridWidget = $('#' + grid[0].id).data('kendoGrid');
                gridWidget.saveAsExcel();
            }
            else {
                alert('Please load a report before attempting to export');
            }
        }
    },
    btn_CreateJoinTransfer: {
        onClick: function (e) {
            orionElements.toolbar_JoinTransfers.toggle('create');
        },
        toolTip: 'Create New Transfer Request'
    },
    btn_EditJoinTransfer: {
        onClick: function (e) {
            if (fts.value(orionInputs.ddl_JoinTransfers) !== null) {
                orionElements.toolbar_JoinTransfers.toggle('edit');
            }
        },
        toolTip: 'Edit Transfer Request'
    },
    btn_DeleteJoinTransfer: {
        onClick: function (e) {
            orionInfoViews.travelRequestInfoView.transferRequests.deleteTransferRequest('J');
        },
        toolTip: 'Delete Transfer Request'
    },
    btn_SaveJoinTransfer: {
        onClick: function () {
            orionInfoViews.travelRequestInfoView.transferRequests.save('J');
        },
        toolTip: 'Save Transfer Request'
    },
    btn_CancelJoinTransferEditing: {
        onClick: function (e) {
            //orionInfoViews.travelRequestInfoView.transferRequests.reset('J');
            orionInfoViews.travelRequestInfoView.transferRequests.disableInputs('J', true);
            orionElements.toolbar_JoinTransfers.toggle();
        },
        toolTip: 'Cancel (Discard Changes)'
    },
    btn_CreateLeaveTransfer: {
        onClick: function (e) {
            orionElements.toolbar_LeaveTransfers.toggle('create');
        },
        toolTip: 'Create New Transfer Request'
    },
    btn_EditLeaveTransfer: {
        onClick: function (e) {
            if (fts.value(orionInputs.ddl_LeaveTransfers) !== null) {
                orionElements.toolbar_LeaveTransfers.toggle('edit');
            }
        },
        toolTip: 'Edit Transfer Request'
    },
    btn_DeleteLeaveTransfer: {
        onClick: function (e) {
            orionInfoViews.travelRequestInfoView.transferRequests.deleteTransferRequest('L');
        },
        toolTip: 'Delete Transfer Request'
    },
    btn_SaveLeaveTransfer: {
        onClick: function () {
            orionInfoViews.travelRequestInfoView.transferRequests.save('L');
        },
        toolTip: 'Save Transfer Request'
    },
    btn_CancelLeaveTransferEditing: {
        onClick: function (e) {
            //orionInfoViews.travelRequestInfoView.transferRequests.reset('L');
            orionInfoViews.travelRequestInfoView.transferRequests.disableInputs('L', true);
            orionElements.toolbar_LeaveTransfers.toggle();
        },
        toolTip: 'Cancel (Discard Changes)'
    },
    btn_AcceptPrivacyStatement: {
        onClick: function (e) {
            console.log('orionButtons.btn_AcceptPrivacyStatement.onClick');
            orionWindows.window_PrivacyStatement.acceptPrivacyStatement();
        },
        toolTip: 'Accept Privacy Statement'
    },
    btn_ViewFlights: {
        onClick: function (e) {
            orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = fts.getGridRowOfClickedButton(e);
            orionWindows.window_FlightInfo.open();
        }
    }
};

var orionElements = {
    contentwrapper_Projects: {
        expand: function () {
            fts.getElement(this).animate({
                height: 'show'
            });
        },
        collapse: function () {
            fts.getElement(this).animate({
                height: 'hide'
            });
        }
    },
    gridwrapper_Projects: {
        expand: function () {
            $('#gridwrapper_Projects').animate({
                height: '100%'
            });
            $('#gridwrapper_Projects').css('border-bottom-style', 'none');

            $('#gridwrapper_Projects > div.ftsToolbar:first-of-type').animate({
                height: 'show'
            });
            $('#content_Projects').animate({
                height: 'calc(100% - 54px)'
            });
            $('div.k-widget.k-grid > .k-grid-content tbody[role="rowgroup"]:first-of-type td[role="gridcell"]').css({
                'white-space': 'normal',
                'text-overflow': 'visible'
            });
        },
        collapse: function () {
            $('#gridwrapper_Projects').animate({
                height: this.collapsedHeight
            });
            $('#gridwrapper_Projects').css('border-bottom-style', 'solid');

            $('#gridwrapper_Projects > div.ftsToolbar:first-of-type').animate({
                height: 'hide'
            });
            $('#content_Projects').animate({
                height: '100%'
            });
            $('div.k-widget.k-grid > .k-grid-content tbody[role="rowgroup"]:first-of-type td[role="gridcell"]').css({
                'white-space': 'nowrap',
                'text-overflow': 'ellipsis'
            });
        },
        collapsedHeight: '91px'
    },
    infowrapper_EmployeeBasicInfo: {
    },
    navbartab_Employees: {
        show: function () {
            if (!fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).addClass('ftsNavbar__tab--active');
            }
        },
        hide: function () {
            if (fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).removeClass('ftsNavbar__tab--active');
            }
        }
    },
    navbartab_Projects: {
        show: function () {
            if (!fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).addClass('ftsNavbar__tab--active');
            }
        },
        hide: function () {
            if (fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).removeClass('ftsNavbar__tab--active');
            }
        }
    },
    navbartab_Reports: {
        show: function () {
            if (!fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).addClass('ftsNavbar__tab--active');
            }
        },
        hide: function () {
            if (fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).removeClass('ftsNavbar__tab--active');
            }
        }
    },
    navbartab_Vendors: {
        show: function () {
            if (!fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).addClass('ftsNavbar__tab--active');
            }
        },
        hide: function () {
            if (fts.getElement(this).hasClass('ftsNavbar__tab--active')) {
                fts.getElement(this).removeClass('ftsNavbar__tab--active');
            }
        }
    },
    notification_Orion: {
        show: function (text, container) {
            var containerElement = container ? container : document.querySelector('.ftsBody');
            var containerWidth = containerElement.offsetWidth;
            var leftPosition = containerWidth / 2; // left position will be set in the 'onShow' event handler
            var options = {
                position: {
                    pinned: true,
                    top: 20,
                    left: leftPosition,
                    bottom: null,
                    right: null
                },
                show: this.onShow
            };
            var widget = $('#notification_Orion').kendoNotification(options).data('kendoNotification');
            widget.show(text);
        },
        onShow: function (e) {
            var animationContainer = $(e.element[0]).closest('.k-animation-container');
            var width = animationContainer[0].offsetWidth;
            var bodyDiv = document.querySelector('.ftsBody');
            var pageWidth = bodyDiv.offsetWidth;
            var position = pageWidth / 2 - width / 2;
            $(animationContainer).css('left', position);
        }
    },
    pagewrapper_Employees: {
        show: function () {
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            fts.getElement(this).fadeOut();
        }
    },
    pagewrapper_Projects: {
        show: function () {
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            fts.getElement(this).fadeOut();
        }
    },
    pagewrapper_Reports: {
        show: function () {
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            fts.getElement(this).fadeOut();
        }
    },
    pagewrapper_Vendors: {
        show: function () {
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            fts.getElement(this).fadeOut();
        }
    },
    passportToolbar_Primary: {
        expand: function () {
            fts.getElement(this).animate({
                height: 'show'
            });
        },
        collapse: function () {
            fts.getElement(this).animate({
                height: 'hide'
            });
        }
    },
    passportToolbar_Secondary: {
        expand: function () {
            fts.getElement(this).animate({
                height: 'show'
            });
        },
        collapse: function () {
            fts.getElement(this).animate({
                height: 'hide'
            });
        }
    },
    tabstrip_EmployeePassportsAndVisas: {
        build: function () {
            $('#tabstrip_EmployeePassportsAndVisas').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        },
        activeTab: function () {
            return $('#tabstrip_EmployeePassportsAndVisas .k-content.k-state-active');
        }
    },
    tabstrip_EmployeeProjectAssignmentWindow: {
        build: function () {
            $('#tabstrip_EmployeeProjectAssignmentWindow').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        },
        activeTab: function () {
            return $('#tabstrip_EmployeeProjectAssignmentWindow .k-content.k-state-active');
        }
    },
    tabstrip_LodgingTemplate: {
        build: function () {
            $('#tabstrip_LodgingTemplate').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_TransferTemplate: {
        build: function () {
            $('#tabstrip_TranferTemplate').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_Projects: {
        build: function () {
            $('#tabstrip_Projects').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_Settings: {
        build: function () {
            $('#tabstrip_Settings').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_TravelGrids: {
        build: function () {
            $('#tabstrip_TravelGrids').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_EmployeesAndUsers: {
        build: function () {
            $('#tabstrip_EmployeesAndUsers').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_VendorProjectAssignmentWindow: {
        build: function () {
            $('#tabstrip_VendorProjectAssignmentWindow').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    tabstrip_Vendors: {
        build: function () {
            $('#tabstrip_Vendors').kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
        }
    },
    toolbar_JoinTransfers: {
        toggle: function (createOrEdit) {
            fts.dom.animate($('#toolbar_JoinTransfers > div:first-of-type'));
            fts.dom.animate($('#toolbar_JoinTransfers > div:last-of-type'));
            var travelDirection = 'J';
            var text;
            if (createOrEdit !== null && createOrEdit !== undefined) {
                orionInfoViews.travelRequestInfoView.transferRequests.disableInputs(travelDirection, false);
                orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.join = {
                    TransferRequestID: 0,
                    TransferReviewStatusTypeID: null,
                    TransitTypeID: null,
                    TransferRequestNotes: '',
                    TravelDirection: travelDirection,
                    EmployeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID,
                    IsActive: true
                };
                if (createOrEdit === 'create') {
                    orionInfoViews.travelRequestInfoView.transferRequests.resetInputs(travelDirection);
                    text = 'Creating New Transfer Request...';
                }
                else {
                    orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.join.TransferRequestID = fts.value(orionInputs.ddl_JoinTransfers);
                    text = 'Editing Transfer Request...';
                }
            }
            else {
                text = '';
                orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.join = null;
            }
            var span = $('#toolbar_JoinTransfers > div:last-of-type > span:first-of-type');
            span.html(text);
        }
    },
    toolbar_LeaveTransfers: {
        toggle: function (createOrEdit) {
            fts.dom.animate($('#toolbar_LeaveTransfers > div:first-of-type'));
            fts.dom.animate($('#toolbar_LeaveTransfers > div:last-of-type'));
            var travelDirection = 'L';
            var text;
            if (createOrEdit !== null && createOrEdit !== undefined) {
                orionInfoViews.travelRequestInfoView.transferRequests.disableInputs(travelDirection, false);
                orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.leave = {
                    TransferRequestID: 0,
                    TransferReviewStatusTypeID: null,
                    TransitTypeID: null,
                    TransferRequestNotes: '',
                    TravelDirection: travelDirection,
                    EmployeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID,
                    IsActive: true
                };
                if (createOrEdit === 'create') {
                    orionInfoViews.travelRequestInfoView.transferRequests.resetInputs(travelDirection);
                    text = 'Creating New Transfer Request...';
                }
                else {
                    orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.join.TransferRequestID = fts.value(orionInputs.ddl_JoinTransfers);
                    text = 'Editing Transfer Request...';
                }
            }
            else {
                text = '';
                orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited.leave = null;
            }
            var span = $('#toolbar_LeaveTransfers > div:last-of-type > span:first-of-type');
            span.html(text);    
        }
    },
    toolbar_EmployeePassports: {
        toggle: function (createOrEdit) {
            fts.dom.animate($('#toolbar_EmployeePassports > div:first-of-type'));
            fts.dom.animate($('#toolbar_EmployeePassports > div:last-of-type'));
            var text;
            if (createOrEdit !== null && createOrEdit !== undefined) {
                orionInfoViews.infoview_Passport.enableInputs();
                orionInfoViews.infoview_Passport.itemBeingEdited = {
                    PassportID: 0,
                    EmployeeID: orionInfoViews.employeeInfoView.itemBeingEdited.ID,
                    PassportNumber: '',
                    CountryID: orionInfoViews.employeeInfoView.itemBeingEdited.CountryOfResidenceID,
                    IssueDate: null,
                    ExpirationDate: null,
                    IsActive: true
                };
                var inputs = orionInfoViews.infoview_Passport.inputs();
                if (createOrEdit === 'create') {
                    $.each(inputs, function (fieldName, input) {
                        fts.value(input, 'ftsReset');
                    });
                    fts.value(orionInputs.ddl_PassportCountry, orionInfoViews.employeeInfoView.itemBeingEdited.CountryOfResidenceID);
                    text = 'Creating new Passport...';
                } else {
                    orionInfoViews.infoview_Passport.itemBeingEdited.PassportID = fts.value(orionInputs.ddl_EmployeePassports);
                    text = 'Editing Passport...';
                }
                fts.getElement(orionInputs.textbox_PassportNumber).focus();
            } else {
                text = '';
                orionInfoViews.infoview_Passport.itemBeingEdited = null;
            }
            var span = $('#toolbar_EmployeePassports > div:last-of-type > span:first-of-type');
            span.html(text);            
        }
    },
    toolbar_EmployeeVisas: {
        toggle: function (createOrEdit) {
            fts.dom.animate($('#toolbar_EmployeeVisas > div:first-of-type'));
            fts.dom.animate($('#toolbar_EmployeeVisas > div:last-of-type'));
            var text;
            if (createOrEdit !== null && createOrEdit !== undefined) {
                orionInfoViews.infoview_Visa.enableInputs();
                //orionInfoViews.itemBeingEdited = fts.buildObjectByFieldList(orionInfoViews.infoview_Passport.viewModelFields);
                orionInfoViews.infoview_Visa.itemBeingEdited = {
                    VisaID: 0,
                    EmployeeID: orionInfoViews.employeeInfoView.itemBeingEdited.ID,
                    VisaNumber: '',
                    CountryID: orionInfoViews.employeeInfoView.itemBeingEdited.CountryOfResidenceID,
                    ValidFromDate: null,
                    ValidToDate: null,
                    IsActive: true
                };
                var inputs = orionInfoViews.infoview_Visa.inputs();
                if (createOrEdit === 'create') {
                    $.each(inputs, function (fieldName, input) {
                        fts.value(input, 'ftsReset');
                    });
                    fts.value(orionInputs.ddl_VisaCountryID, orionInfoViews.employeeInfoView.itemBeingEdited.CountryOfResidenceID);
                    text = 'Creating new Visa...';
                } else {
                    orionInfoViews.infoview_Visa.itemBeingEdited.VisaID = fts.value(orionInputs.ddl_EmployeeVisas);
                    text = 'Editing Visa...';
                }
                fts.getElement(orionInputs.textbox_VisaNumber).focus();
            } else {
                text = '';
                orionInfoViews.infoview_Visa.itemBeingEdited = null;
            }
            var span = $('#toolbar_EmployeeVisas > div:last-of-type > span:first-of-type');
            span.html(text);
        }
    },
    wrapper_EmployeephotoUpload: {
    }
};

var orionInputs = {
    checkbox_ProjectIsActive: {
        keyName: 'IsActive',
        labelText: 'Active',
        labelPosition: 'after',
        defaultCheckedValue: true
    },
    checkbox_VendorIsActive: {
        keyName: 'IsActive',
        labelText: 'Active',
        labelPosition: 'after',
        defaultCheckedValue: true
    },

    datepicker_EmployeeDateOfBirth: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'DateOfBirth',
        labelText: 'Date of Birth'
    },
    datepicker_JoinArrivalDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: this.onOpen,
                change: this.onChange,
                close: this.onClose
            });
        },
        keyName: 'ArrivalDate',
        labelText: 'Arrival Date',
        selectedValue: null,
        onOpen: function () {
            if (fts.value(orionInputs.datepicker_JoinArrivalDate) === null) {
                fts.value(orionInputs.datepicker_JoinArrivalDate, orionGrids.grid_Projects.selectedProject.StartDate);
            }
            else {
                orionInputs.datepicker_JoinArrivalDate.selectedValue = fts.value(orionInputs.datepicker_JoinArrivalDate);
            }
        },
        onChange: function () {
            orionInputs.datepicker_JoinArrivalDate.selectedValue = fts.value(orionInputs.datepicker_JoinArrivalDate);
        },
        onClose: function () {
            var value = orionInputs.datepicker_JoinArrivalDate.selectedValue === null ? 'ftsReset' : orionInputs.datepicker_JoinArrivalDate.selectedValue;
            fts.value(orionInputs.datepicker_JoinArrivalDate, value);
            orionInputs.datepicker_JoinArrivalDate.selectedValue = null;
        }
    },
    datepicker_JoinHotelCheckinDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: this.onOpen,
                change: this.onChange,
                close: this.onClose
            });
        },
        keyName: 'HotelCheckinDate',
        labelText: 'Hotel Check-in Date',
        selectedValue: null,
        onOpen: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckinDate;
            var joinArrivalDateDDL = orionInputs.datepicker_JoinArrivalDate;
            if (fts.value(ddl) === null) {
                var date = fts.value(joinArrivalDateDDL) === null
                    ? orionGrids.grid_Projects.selectedProject.StartDate
                    : fts.value(joinArrivalDateDDL);
                fts.value(ddl, date);
            }
            else {
                ddl.selectedValue = fts.value(ddl);
            }
        },
        onChange: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckinDate;
            ddl.selectedValue = fts.value(ddl);
        },
        onClose: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckinDate;
            var value = ddl.selectedValue === null ? 'ftsReset' : ddl.selectedValue;
            fts.value(ddl, value);
            ddl.selectedValue = null;
        }
    },
    datepicker_JoinHotelCheckoutDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: this.onOpen,
                change: this.onChange,
                close: this.onClose
            });
        },
        keyName: 'HotelCheckoutDate',
        labelText: 'Hotel Check-out Date',
        selectedValue: null,
        onOpen: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckoutDate;
            var checkinDateDDL = orionInputs.datepicker_JoinHotelCheckinDate;
            if (fts.value(ddl) === null) {
                var date = fts.value(checkinDateDDL) === null
                    ? orionGrids.grid_Projects.selectedProject.StartDate
                    : fts.value(checkinDateDDL);
                fts.value(ddl, date);
            }
        },
        onChange: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckoutDate;
            ddl.selectedValue = fts.value(ddl);
        },
        onClose: function () {
            var ddl = orionInputs.datepicker_JoinHotelCheckoutDate;
            var value = ddl.selectedValue === null ? 'ftsReset' : ddl.selectedValue;
            fts.value(ddl, value);
            ddl.selectedValue = null;
        }
    },
    datepicker_PassportExpirationDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'ExpirationDate',
        labelText: 'Expiration Date'
    },
    datepicker_PassportIssueDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'IssueDate',
        labelText: 'Issue Date'
    },
    datepicker_VisaValidToDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'ValidToDate',
        labelText: 'Valid to Date'
    },
    datepicker_VisaValidFromDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'ValidFromDate',
        labelText: 'Valid from Date'
    },
    datepicker_ProjectStartDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month'
            });
        },
        keyName: 'StartDate',
        labelText: 'Start Date'
    },
    datepicker_ProjectEndDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: orionInputs.datepicker_ProjectEndDate.onOpen,
                change: orionInputs.datepicker_ProjectEndDate.onChange,
                close: orionInputs.datepicker_ProjectEndDate.onClose
            });
        },
        keyName: 'EndDate',
        labelText: 'End Date',
        selectedValue: null,
        onOpen: function () {
            if (fts.value(orionInputs.datepicker_ProjectEndDate) === null) {
                fts.value(orionInputs.datepicker_ProjectEndDate, fts.value(orionInputs.datepicker_ProjectStartDate));
            }
            else {
                orionInputs.datepicker_ProjectEndDate.selectedValue = fts.value(orionInputs.datepicker_ProjectEndDate);
            }
        },
        onChange: function () {
            orionInputs.datepicker_ProjectEndDate.selectedValue = fts.value(orionInputs.datepicker_ProjectEndDate);
        },
        onClose: function () {
            var value = orionInputs.datepicker_ProjectEndDate.selectedValue === null ? 'ftsReset' : orionInputs.datepicker_ProjectEndDate.selectedValue;
            fts.value(orionInputs.datepicker_ProjectEndDate, value);
            orionInputs.datepicker_ProjectEndDate.selectedValue = null;
        }
    },
    datepicker_LeaveDepartureDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: orionInputs.datepicker_LeaveDepartureDate.onOpen,
                change: orionInputs.datepicker_LeaveDepartureDate.onChange,
                close: orionInputs.datepicker_LeaveDepartureDate.onClose
            });
        },
        keyName: 'DepartureDate',
        labelText: 'Departure Date',
        selectedValue: null,
        onOpen: function () {
            if (fts.value(orionInputs.datepicker_LeaveDepartureDate) === null) {
                fts.value(orionInputs.datepicker_LeaveDepartureDate, orionGrids.grid_Projects.selectedProject.EndDate);
            }
            else {
                orionInputs.datepicker_LeaveDepartureDate.selectedValue = fts.value(orionInputs.datepicker_LeaveDepartureDate);
            }
        },
        onChange: function () {
            orionInputs.datepicker_LeaveDepartureDate.selectedValue = fts.value(orionInputs.datepicker_LeaveDepartureDate);
        },
        onClose: function () {
            var value = orionInputs.datepicker_LeaveDepartureDate.selectedValue === null ? 'ftsReset' : orionInputs.datepicker_LeaveDepartureDate.selectedValue;
            fts.value(orionInputs.datepicker_LeaveDepartureDate, value);
            orionInputs.datepicker_LeaveDepartureDate.selectedValue = null;
        }
    },
    datepicker_LeaveHotelCheckinDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: this.onOpen,
                change: this.onChange,
                close: this.onClose
            });
        },
        keyName: 'HotelCheckinDate',
        labelText: 'Hotel Check-in Date',
        selectedValue: null,
        onOpen: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckinDate;
            var joinArrivalDateDDL = orionInputs.datepicker_JoinArrivalDate;
            if (fts.value(ddl) === null) {
                var date = fts.value(joinArrivalDateDDL) === null
                    ? orionGrids.grid_Projects.selectedProject.StartDate
                    : fts.value(joinArrivalDateDDL);
                fts.value(ddl, date);
            }
            else {
                ddl.selectedValue = fts.value(ddl);
            }
        },
        onChange: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckinDate;
            ddl.selectedValue = fts.value(ddl);
        },
        onClose: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckinDate;
            var value = ddl.selectedValue === null ? 'ftsReset' : ddl.selectedValue;
            fts.value(ddl, value);
            ddl.selectedValue = null;
        }
    },
    datepicker_LeaveHotelCheckoutDate: {
        build: function () {
            fts.getElement(this).kendoDatePicker({
                start: 'month',
                depth: 'month',
                open: this.onOpen,
                change: this.onChange,
                close: this.onClose
            });
        },
        keyName: 'HotelCheckoutDate',
        labelText: 'Hotel Check-out Date',
        selectedValue: null,
        onOpen: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckoutDate;
            var leaveHotelCheckinDateDDL = orionInputs.datepicker_LeaveHotelCheckinDate;
            if (fts.value(ddl) === null) {
                var date = fts.value(leaveHotelCheckinDateDDL) === null
                    ? orionGrids.grid_Projects.selectedProject.EndDate
                    : fts.value(leaveHotelCheckinDateDDL);
                fts.value(ddl, date);
            }
        },
        onChange: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckoutDate;
            ddl.selectedValue = fts.value(ddl);
        },
        onClose: function () {
            var ddl = orionInputs.datepicker_LeaveHotelCheckoutDate;
            var value = ddl.selectedValue === null ? 'ftsReset' : ddl.selectedValue;
            fts.value(ddl, value);
            ddl.selectedValue = null;
        }
    },

    ddl_ActiveVendors: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetVendors',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                filter: 'contains',
                optionLabel: 'Select Vendor',
                autoBind: false
            });
        },
        keyName: 'VendorID',
        labelText: ''
    },
    ddl_EmployeeGender: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetGenders',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                dataBound: this.onDataBound
            });
        },
        labelText: 'Gender',
        keyName: 'GenderID',
        onDataBound: function (e) {
            var data = this.dataSource.view();
        }
    },
    ddl_EmployeeCountryOfResidence: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetCountries',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                filter: 'contains',
                autoBind: true
            });
        },
        keyName: 'CountryOfResidenceID',
        labelText: 'Country of Residence'
    },
    ddl_EmployeePassports: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'MaskedPassportNumber',
                dataValueField: orionInputs.ddl_EmployeePassports.keyName,
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetPassportsByEmployeeID',
                            data: orionInputs.ddl_EmployeePassports.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                change: orionInputs.ddl_EmployeePassports.onChange,
                dataBinding: orionInputs.ddl_EmployeePassports.onDataBinding,
                dataBound: orionInputs.ddl_EmployeePassports.dataBound,
                filter: 'contains',
                optionLabel: 'Existing Passports'
            });
        },
        keyName: 'PassportID',
        labelText: '',
        data: function () {
            var employeeID = orionInfoViews.employeeInfoView.itemBeingEdited !== null
                ? orionInfoViews.employeeInfoView.itemBeingEdited.ID
                : 0;
            return {
                employeeID: employeeID
            };
        },
        onChange: function () {
            var selectedPassportID = fts.getWidgetByRoot(orionInputs.ddl_EmployeePassports).value();
            if (selectedPassportID !== '' && selectedPassportID !== null && selectedPassportID !== undefined) {
                fts.getElement(orionButtons.btn_EditPassport).css('display', 'inline-block');
                fts.getElement(orionButtons.btn_DeletePassport).css('display', 'inline-block');
                orionInfoViews.infoview_Passport.load(selectedPassportID);
            }
            else {
                fts.getElement(orionButtons.btn_EditPassport).css('display', 'none');
                fts.getElement(orionButtons.btn_DeletePassport).css('display', 'none');
                fts.resetInputs(orionInfoViews.infoview_Passport.inputs());
            }
        },
        onDataBinding: function () {
            fts.getElement(orionButtons.btn_EditPassport).css('display', 'none');
            fts.getElement(orionButtons.btn_DeletePassport).css('display', 'none');
        },
        onDataBound: function () {
            if (orionInfoViews.infoview_Passport.itemBeingEdited !== null) {
                fts.getWidgetByRoot(orionInputs.ddl_EmployeePassports).select(orionInfoViews.infoview_Passport.itemBeingEdited.PassportID);
            }
            if (openedWindows.openedWindow !== null) {
                var ddl = $('#ddl_EmployeePassports').data('kendoDropDownList');
                ddl.select(0);
                // TO-DO
                // if more than zero passports exist, show buttons wrapper, otherwise hide it
                var length = ddl.dataSource.data().length;
                ddl_EmployeePassports.onChange();
            }
        }
    },
    ddl_EmployeeVisas: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'MaskedVisaNumber',
                dataValueField: orionInputs.ddl_EmployeeVisas.keyName,
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetVisasByEmployeeID',
                            data: orionInputs.ddl_EmployeeVisas.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                change: orionInputs.ddl_EmployeeVisas.onChange,
                dataBinding: orionInputs.ddl_EmployeeVisas.onDataBinding,
                dataBound: orionInputs.ddl_EmployeeVisas.dataBound,
                filter: 'contains',
                optionLabel: 'Existing Visas'
            });
        },
        keyName: 'VisaID',
        labelText: '',
        data: function () {
            var employeeID = orionInfoViews.employeeInfoView.itemBeingEdited !== null
                ? orionInfoViews.employeeInfoView.itemBeingEdited.ID
                : 0;
            return {
                employeeID: employeeID
            };
        },
        onChange: function () {
            var selectedVisaID = fts.getWidgetByRoot(orionInputs.ddl_EmployeeVisas).value();
            if (selectedVisaID !== '' && selectedVisaID !== null && selectedVisaID !== undefined) {
                fts.getElement(orionButtons.btn_EditVisa).css('display', 'inline-block');
                fts.getElement(orionButtons.btn_DeleteVisa).css('display', 'inline-block');
                orionInfoViews.infoview_Visa.load(selectedVisaID);
            }
            else {
                fts.getElement(orionButtons.btn_EditVisa).css('display', 'none');
                fts.getElement(orionButtons.btn_DeleteVisa).css('display', 'none');
                fts.resetInputs(orionInfoViews.infoview_Visa.inputs());
            }
        },
        onDataBinding: function () {
            fts.getElement(orionButtons.btn_EditVisa).css('display', 'none');
            fts.getElement(orionButtons.btn_DeleteVisa).css('display', 'none');
        },
        onDataBound: function () {
            if (orionInfoViews.infoview_Visa.itemBeingEdited !== null) {
                fts.getWidgetByRoot(orionInputs.ddl_EmployeeVisas).select(orionInfoViews.infoview_Visa.itemBeingEdited.VisaID);
            }
            if (openedWindows.openedWindow !== null) {
                var ddl = fts.getWidgetByRoot(orionInputs.ddl_EmployeeVisas);
                ddl.select(0);
                // TO-DO
                // if more than zero visas exist, show buttons wrapper, otherwise hide it
                ddl_EmployeeVisas.onChange();
            }
        }
    },
    ddl_EmployeeVisaTypeID: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'ID',
                dataValueField: 'Name',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetVisaTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                filter: 'contains',
                optionLabel: 'Visa Types'
            });
        },
        keyName: 'VisaTypeID',
        labelText: 'Visa Type'
    },
    ddl_PassportCountry: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetCountries',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                filter: 'contains',
                autoBind: false
            });
        },
        keyName: 'CountryID',
        labelText: 'Country'
    },
    ddl_ProjectBrand: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/Brands_Read',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Select Brand...',
                change: orionInputs.ddl_ProjectBrand.onChange,
                dataBound: orionInputs.ddl_ProjectBrand.onDataBound
            });
        },
        keyName: 'BrandID',
        labelText: 'Brand',
        onChange: function () {
            fts.getWidgetByRoot(orionInputs.ddl_ProjectFunction).dataSource.read();
            fts.getWidgetByRoot(orionInputs.ddl_ProjectLocation).dataSource.read();
        },
        onDataBound: function () {
            if (orionInputs.ddl_ProjectBrand.loadingBrand) {
                orionInputs.ddl_ProjectBrand.loadingBrand = false;
                var thisProject = orionGrids.grid_Projects.loadedProject !== null ? orionGrids.grid_Projects.loadedProject : orionGrids.grid_Projects.selectedProject;
                if (thisProject.ID !== 0) {
                    fts.value(orionInputs.ddl_ProjectBrand, thisProject.BrandID);
                    orionInfoViews.projectInfoView.loadingProjectInfo = true;
                    orionInputs.ddl_ProjectLocation.hasBeenLoaded = false;
                    fts.getWidgetByRoot(orionInputs.ddl_ProjectLocation).dataSource.read();
                    orionInputs.ddl_ProjectFunction.hasBeenLoaded = false;
                    fts.getWidgetByRoot(orionInputs.ddl_ProjectFunction).dataSource.read();
                }
            }
        },
        loadingBrand: false
    },
    ddl_ProjectLocation: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/LocationsByBrand_Read',
                            data: function () {
                                return {
                                    brandID: fts.value(orionInputs.ddl_ProjectBrand)
                                };
                            },
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                open: orionInputs.ddl_ProjectLocation.onOpen,
                dataBound: orionInputs.ddl_ProjectLocation.onDataBound
            });
        },
        keyName: 'LocationID',
        labelText: 'Ship',
        onOpen: function () {
            fts.getWidgetByRoot(orionInputs.ddl_ProjectLocation).list.width('300px');
            orionInfoViews.projectInfoView.checkBrandDDL();
        },
        onDataBound: function (e) {
            if (ftsConfig.ftsWindow.openedWindows.openedWindow) {
                if (orionInfoViews.projectInfoView.loadingProjectInfo) {
                    orionInputs.ddl_ProjectLocation.hasBeenLoaded = true;
                    var thisProject = orionGrids.grid_Projects.loadedProject !== null ? orionGrids.grid_Projects.loadedProject : orionGrids.grid_Projects.selectedProject;
                    fts.value(orionInputs.ddl_ProjectLocation, thisProject.LocationID);
                    if (orionInputs.ddl_ProjectFunction.hasBeenLoaded) {
                        if (!orionWindows.window_ProjectInfo.hasBeenOpened) {
                            editProjectWindow_HasBeenOpened = true;
                            orionInputs.ddl_ProjectLocation.hasBeenLoaded = false;
                            orionInputs.ddl_ProjectFunction.hasBeenLoaded = false;
                            fts.getWidgetByRoot(orionInputs.ddl_ProjectLocation).dataSource.read();
                            fts.getWidgetByRoot(orionInputs.ddl_ProjectFunction).dataSource.read();
                        }
                        else {
                            orionInfoViews.projectInfoView.loadingProjectInfo = false;
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        }
                    }
                }
            }
        },
        hasBeenLoaded: false
    },
    ddl_ProjectFunction: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/ProjectFunctionsForBrand_Read',
                            data: function () {
                                return {
                                    brandID: fts.value(orionInputs.ddl_ProjectBrand)
                                };
                            },
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Reason...',
                open: orionInputs.ddl_ProjectFunction.onOpen,
                dataBound: orionInputs.ddl_ProjectFunction.onDataBound
            });
        },
        keyName: 'ProjectFunctionID',
        labelText: 'Reason',
        onOpen: function () {
            fts.getWidgetByRoot(orionInputs.ddl_ProjectFunction).list.width('300px');
            orionInfoViews.projectInfoView.checkBrandDDL();
        },
        onDataBound: function () {
            if (ftsConfig.ftsWindow.openedWindows.openedWindow) {
                if (orionInfoViews.projectInfoView.loadingProjectInfo) {
                    orionInputs.ddl_ProjectFunction.hasBeenLoaded = true;
                    var projectFunctionID = orionGrids.grid_Projects.loadedProject !== null ? orionGrids.grid_Projects.loadedProject.ProjectFunctionID : orionGrids.grid_Projects.selectedProject.ProjectFunctionID;
                    fts.value(orionInputs.ddl_ProjectFunction, projectFunctionID);
                    if (orionInputs.ddl_ProjectLocation.hasBeenLoaded) {
                        if (!orionWindows.window_ProjectInfo.hasBeenOpened) {
                            orionWindows.window_ProjectInfo.hasBeenOpened = true;
                            orionInputs.ddl_ProjectLocation.hasBeenLoaded = false;
                            orionInputs.ddl_ProjectFunction.hasBeenLoaded = false;
                            fts.getWidgetByRoot(orionInputs.ddl_ProjectLocation).dataSource.read();
                            fts.getWidgetByRoot(orionInputs.ddl_ProjectFunction).dataSource.read();
                        }
                        else {
                            orionInfoViews.projectInfoView.loadingProjectInfo = false;
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        }
                    }
                }
            }
        },
        hasBeenLoaded: false
    },
    ddl_ProjectType: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/ProjectTypes_Read',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Type...'
            });
        },
        keyName: 'ProjectTypeID',
        labelText: 'Type'
    },
    ddl_JoinTravelArrangements: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: [
                    { Name: 'No travel arrangements needed', ID: '1' },
                    { Name: 'Travel arranged by Holland America Group', ID: '2' },
                    { Name: 'Travel arranged by Contractor (Vendor)', ID: '3' }
                ],
                optionLabel: 'Select Flight Arrangements...',
                autoBind: true,
                change: orionInputs.ddl_JoinTravelArrangements.onChange,
                open: orionInputs.ddl_JoinTravelArrangements.onOpen
            });
        },
        keyName: 'ArrangementTypeID',
        labelText: '',
        onChange: function () {
            var val = $('#ddl_JoinTravelArrangements').data('kendoDropDownList').value();
            var wrapperToShow = val === '0' ? $('#wrapper_JoinTravelArrangementsNone') : val === '1' ? $('#wrapper_JoinTravelArrangementsHal') : $('#wrapper_JoinTravelArrangementsContractor');

            $.each({
                None: $('#wrapper_JoinTravelArrangementsNone'),
                Hal: $('#wrapper_JoinTravelArrangementsHal'),
                Contractor: $('#wrapper_JoinTravelArrangementsContractor')
            }, function (index, value) {
                if (value.hasClass('travelArrangements--selected')) {
                    value.removeClass('travelArrangements--selected');
                }
            });
            wrapperToShow.addClass('travelArrangements--selected');
        },
        onOpen: function () {
            fts.getWidgetByRoot(orionInputs.ddl_JoinTravelArrangements).list.width("500px");
        }
    },
    ddl_JoinDepartureAirport: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'CityName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAirports',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                pageSize: 50,
                serverPaging: true,
                autoBind: true,
                optionLabel: ' ',
                filter: 'contains',
                template: '<span>#:data.CityName# - #:data.Code#</span>',
                valueTemplate: '<span>#:data.CityName# - #:data.Code#</span>',
                filtering: orionInputs.ddl_JoinDepartureAirport.onFiltering
            });
        },
        keyName: 'DepartureAirportID',
        labelText: 'Departure Airport',
        onFiltering: function (e) {
            var filterValue = e.filter !== undefined ? e.filter.value : '';
            e.preventDefault();
            this.dataSource.filter({
                logic: 'or',
                filters: [
                    {
                        field: 'CityName',
                        operator: 'contains',
                        value: filterValue
                    },
                    {
                        field: 'Code',
                        operator: 'contains',
                        value: filterValue
                    }
                ]
            });
        }
    },
    ddl_JoinArrivalAirport: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'CityName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAirports',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                pageSize: 50,
                serverPaging: true,
                autoBind: true,
                optionLabel: ' ',
                filter: 'contains',
                template: '<span>#:data.CityName# - #:data.Code#</span>',
                valueTemplate: '<span>#:data.CityName# - #:data.Code#</span>',
                filtering: orionInputs.ddl_JoinArrivalAirport.onFiltering
            });
        },
        keyName: 'ArrivalAirportID',
        labelText: 'Arrival Airport',
        onFiltering: function (e) {
            var filterValue = e.filter !== undefined ? e.filter.value : '';
            e.preventDefault();
            this.dataSource.filter({
                logic: 'or',
                filters: [
                    {
                        field: 'CityName',
                        operator: 'contains',
                        value: filterValue
                    },
                    {
                        field: 'Code',
                        operator: 'contains',
                        value: filterValue
                    }
                ]
            });
        }
    },
    ddl_JoinHotelReviewStatus: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetHotelReviewStatusTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                filter: 'contains'
            });
        },
        keyName: 'HotelReviewStatusTypeID',
        labelText: 'Review Status'
    },
    ddl_JoinOnboardRoomingPartner: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'FullName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAvailableOnboardRoomingPartners',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Onboard Rooming Partner...'
            });
        },
        data: function () {
            var vendorProjectAssignmentID;
            if (orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment !== null) {
                vendorProjectAssignmentID = orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment.ID;
            } else {
                //TODO: Get VendorProjectAssignmentID for UserGroup: Company Travel Administrator
            }
            return {
                vendorProjectAssignmentID: vendorProjectAssignmentID,
                employeeID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.EmployeeID
            };
        },
        keyName: 'OnboardRoomingPartnerID',
        labelText: 'Onboard Rooming Partner'
    },
    ddl_JoinOnboardRoomingType: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetOnboardRoomingTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                optionLabel: 'Onboard Rooming Type...',
                filter: 'contains'
            });
        },
        keyName: 'OnboardRoomingTypeID',
        labelText: 'Onboard Rooming Type'
    },
    ddl_JoinRoomingPartner: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'FullName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAvailableRoomingPartners',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Rooming Partner...'
            });
        },
        data: function () {
            var vendorProjectAssignmentID;
            if (orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment !== null) {
                vendorProjectAssignmentID = orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment.ID;
            } else {
                //TODO: Get VendorProjectAssignmentID for UserGroup: Company Travel Administrator
            }
            return {
                vendorProjectAssignmentID: vendorProjectAssignmentID,
                employeeID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.EmployeeID
            };
        },
        keyName: 'EmployeeID',
        labelText: 'Hotel Rooming Partner'
    },
    ddl_JoinRoomingType: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetHotelRoomingTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                optionLabel: 'Hotel Rooming Type...',
                filter: 'contains'
            });
        },
        keyName: 'RoomingTypeID',
        labelText: 'Hotel Rooming Type'
    },
    ddl_JoinTransfers: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'TransitTypeAbbrev',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetTransferRequests',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                filter: 'contains',
                optionLabel: 'Existing Transfer Requests',
                dataBound: this.onDataBound,
                change: this.onChange
            });
        },
        data: function () {
            return {
                employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID,
                travelDirection: 'J'
            };
        },
        onDataBound: function () {
            var ddl = fts.getWidgetByRoot(orionInputs.ddl_JoinTransfers);
            var items = ddl.items();
            if (items.length > 0) {
                ddl.select(1);
                orionInputs.ddl_JoinTransfers.onChange();
            }
        },
        onChange: function () {
            var selectedValue = fts.value(orionInputs.ddl_JoinTransfers);
            if (!fts.isNull(selectedValue)) {
                orionInfoViews.travelRequestInfoView.transferRequests.load('J');
            }
            else {
                orionInfoViews.travelRequestInfoView.transferRequests.resetInputs('J');
            }
        },
        keyName: 'TransferRequestID',
        labelText: ''
    },
    ddl_JoinTransferStatus: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetTransferStatusTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false, //set to true once API for getting status types is done
                filter: 'contains'
            });
        },
        keyName: 'TransferReviewStatusTypeID',
        labelText: 'Transfer Status'
    },
    ddl_LeaveTravelArrangements: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: [
                    { Name: 'No travel arrangements needed', ID: '1' },
                    { Name: 'Travel arranged by Holland America Group', ID: '2' },
                    { Name: 'Travel arranged by Contractor (Vendor)', ID: '3' }
                ],
                optionLabel: 'Select Flight Arrangements...',
                autoBind: true,
                change: this.onChange,
                open: this.onOpen
            });
        },
        keyName: 'ArrangementTypeID',
        labelText: '',
        onChange: function () {
            var val = $('#ddl_JoinTravelArrangements').data('kendoDropDownList').value();
            var wrapperToShow = val === '1' ? $('#wrapper_JoinTravelArrangementsNone') : val === '2' ? $('#wrapper_JoinTravelArrangementsHal') : $('#wrapper_JoinTravelArrangementsContractor');

            $.each({
                None: $('#wrapper_JoinTravelArrangementsNone'),
                Hal: $('#wrapper_JoinTravelArrangementsHal'),
                Contractor: $('#wrapper_JoinTravelArrangementsContractor')
            }, function (index, value) {
                if (value.hasClass('travelArrangements--selected')) {
                    value.removeClass('travelArrangements--selected');
                }
            });
            wrapperToShow.addClass('travelArrangements--selected');
        },
        onOpen: function () {
            fts.getWidgetByRoot(orionInputs.ddl_LeaveTravelArrangements).list.width("500px");
        }
    },
    ddl_LeaveDepartureAirport: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'CityName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAirports',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                pageSize: 50,
                serverPaging: true,
                autoBind: true,
                optionLabel: ' ',
                filter: 'contains',
                template: '<span>#:data.CityName# - #:data.Code#</span>',
                valueTemplate: '<span>#:data.CityName# - #:data.Code#</span>',
                filtering: this.onFiltering
            });
        },
        keyName: 'DepartureAirportID',
        labelText: 'Departure Airport',
        onFiltering: function (e) {
            var filterValue = e.filter !== undefined ? e.filter.value : '';
            e.preventDefault();
            this.dataSource.filter({
                logic: 'or',
                filters: [
                    {
                        field: 'CityName',
                        operator: 'contains',
                        value: filterValue
                    },
                    {
                        field: 'Code',
                        operator: 'contains',
                        value: filterValue
                    }
                ]
            });
        }
    },
    ddl_LeaveArrivalAirport: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'CityName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAirports',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                pageSize: 50,
                serverPaging: true,
                autoBind: true,
                optionLabel: ' ',
                filter: 'contains',
                template: '<span>#:data.CityName# - #:data.Code#</span>',
                valueTemplate: '<span>#:data.CityName# - #:data.Code#</span>',
                filtering: this.onFiltering
            });
        },
        keyName: 'ArrivalAirportID',
        labelText: 'Arrival Airport',
        onFiltering: function (e) {
            var filterValue = e.filter !== undefined ? e.filter.value : '';
            e.preventDefault();
            this.dataSource.filter({
                logic: 'or',
                filters: [
                    {
                        field: 'CityName',
                        operator: 'contains',
                        value: filterValue
                    },
                    {
                        field: 'Code',
                        operator: 'contains',
                        value: filterValue
                    }
                ]
            });
        }
    },
    ddl_LeaveHotelReviewStatus: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetHotelReviewStatusTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                filter: 'contains'
            });
        },
        keyName: 'HotelReviewStatusTypeID',
        labelText: 'Review Status'
    },
    ddl_LeaveRoomingPartner: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'FullName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetAvailableRoomingPartners',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                optionLabel: 'Rooming Partner...'
            });
        },
        data: function () {
            var vendorProjectAssignmentID;
            if (orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment !== null) {
                vendorProjectAssignmentID = orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment.ID;
            } else {
                //TODO: Get VendorProjectAssignmentID for UserGroup: Company Travel Administrator
            }
            return {
                vendorProjectAssignmentID: vendorProjectAssignmentID,
                employeeID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.EmployeeID
            };
        },
        keyName: 'EmployeeID',
        labelText: 'Hotel Rooming Partner'
    },
    ddl_LeaveRoomingType: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetHotelRoomingTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                optionLabel: 'Hotel Rooming Type...',
                filter: 'contains'
            });
        },
        keyName: 'RoomingTypeID',
        labelText: 'Hotel Rooming Type'
    },
    ddl_LeaveTransfers: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'TransitTypeAbbrev',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetTransferRequests',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                filter: 'contains',
                optionLabel: 'Existing Transfer Requests',
                dataBound: this.onDataBound,
                change: this.onChange
            });
        },
        data: function () {
            return {
                employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID,
                travelDirection: 'L'
            };
        },
        onDataBound: function () {
            var ddl = fts.getWidgetByRoot(orionInputs.ddl_LeaveTransfers);
            var items = ddl.items();
            if (items.length > 0) {
                ddl.select(1);
                orionInputs.ddl_LeaveTransfers.onChange();
            }
        },
        onChange: function () {
            var selectedValue = fts.value(orionInputs.ddl_LeaveTransfers);
            if (!fts.isNull(selectedValue)) {
                orionInfoViews.travelRequestInfoView.transferRequests.load('L');
            }
            else {
                orionInfoViews.travelRequestInfoView.transferRequests.resetInputs('L');
            }
        },
        keyName: 'TransferRequestID',
        labelText: ''
    },
    ddl_LeaveTransferStatus: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetTransferStatusTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false, //set to true once API for getting status types is done
                filter: 'contains'
            });
        },
        keyName: 'TransferReviewStatusTypeID',
        labelText: 'Transfer Status'
    },
    ddl_ReportTypes: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetReportTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                filter: 'contains',
                optionLabel: '-- Select Report Type --'
            });
        },
        keyName: 'ReportTypeID',
        labelText: 'Report Type'
    },
    ddl_ReportProjects: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetProjectsByVendorID',
                            data: orionInputs.ddl_ReportProjects.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                filter: 'contains',
                optionLabel: '-- Select Project --'
            });
        },
        data: function () {
            return {
                vendorID: orionSessionVariables.VendorID
            };
        },
        keyName: 'ProjectID',
        labelText: 'Project',
        reportsData: function () {
            return {
                projectID: fts.value(orionInputs.ddl_ReportProjects)
            };
        }
    },
    ddl_SettingsUserGroups: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetUserGroups',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                optionLabel: '-- Select User Group --',
                autoBind: true,
                change: this.onChange
            });
        },
        keyName: 'UserGroupID',
        labelText: '',
        onChange: function (e) {
            var userGroupID = fts.value(orionInputs.ddl_SettingsUserGroups);
            if (userGroupID !== null) {
                orionInfoViews.infoview_UserGroups.resetCheckboxes();
                orionInfoViews.infoview_UserGroups.load(userGroupID);
                //var checkboxesDisabled = !orionSessionVariables.ActionIDs.includes(orionStaticValues.security.actions.UpdateUserGroupPermissions.ID);
                //orionInfoViews.infoview_UserGroups.disableCheckboxes(checkboxesDisabled);

            }
            else {
                orionInfoViews.infoview_UserGroups.resetCheckboxes();
                orionInfoViews.infoview_UserGroups.disableCheckboxes(true);
            }
        }
    },
    ddl_UserGroup: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetUserGroups',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                optionLabel: '-- Select User Group --',
                autoBind: true
            });
        },
        keyName: 'UserGroupID',
        labelText: 'User Group'
    },
    ddl_VisaCountryID: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetCountries',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                filter: 'contains',
                autoBind: false
            });
        },
        keyName: 'CountryID',
        labelText: 'Country'
    },
    ddl_VisaTypeID: {
        build: function () {
            fts.getElement(this).kendoDropDownList({
                dataTextField: 'Name',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetVisaTypes',
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: true,
                optionLabel: 'Visa Type...',
                filter: 'contains'
            });
        },
        keyName: 'VisaTypeID',
        labelText: 'Visa Type'
    },

    multiselect_AssignEmployeesToProject: {
        build: function () {
            fts.getElement(this).kendoMultiSelect({
                dataTextField: 'FullName',
                dataValueField: 'ID',
                dataSource: {
                    transport: {
                        read: {
                            url: 'DropDownList/GetEmployeesForVendor',
                            data: this.data,
                            cache: false
                        }
                    },
                    serverFiltering: false
                },
                autoBind: false,
                autoClose: false,
                placeholder: 'Select Employees'
            });
        },
        keyName: 'EmployeeID',
        labelText: '',
        reset: function () {
            $('#multiselect_AssignEmployeesToProject').data('kendoMultiSelect').dataSource.data([]);
        },
        data: function() {
            var vendorID = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionSessionVariables.VendorID
                : orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment.VendorID;
            var projectID = orionGrids.grid_Projects.selectedProject.ID;
            return {
                vendorID: vendorID,
                projectID: projectID
            };
        }
    },

    numerictextbox_MaximumAllowedContractorCount: {
        build: function () {
            fts.getElement(this).kendoNumericTextBox({
                format: '#',
                min: 0,
                max: 99,
                value: 0,
                decimal: 0
            });
        },
        keyName: 'MaximumAllowedContractorCount',
        labelText: 'Max Employee Qty'
    },


    radiogroup_JoinHotelLocation: {
        keyName: 'HotelLocationTypeID',
        labelText: 'Hotel Location',
        dataSource: orionStaticValues.lodgingData.locationTypes
    },
    radio_JoinHotelByPier: {},
    radio_JoinHotelByAirport: {},

    radiogroup_JoinTransfers: {
        keyName: 'TransitTypeID',
        labelText: 'Transfer Arrangements',
        labelPosition: 'after',
        dataSource: orionStaticValues.transferData.transitTypes.join
    },
    radio_JoinTransferAirportToPier: {},
    radio_JoinTransferAirportToHotel: {},
    radio_JoinTransferHotelToPier: {},

    radiogroup_LeaveTimeRange: {
        keyName: 'DepartureRequestedTimeRangeID',
        labelText: '',
        dataSource: orionStaticValues.airTravel.timeRanges
    },
    radio_LeaveTimeRangeMorning: {
        ID: 2,
        labelText: 'Morning<br />(6am - Noon)'
    },
    radio_LeaveTimeRangeAfternoon: {
        ID: 3,
        labelText: 'Afternoon<br />(Noon - 5pm)'
    },
    radio_LeaveTimeRangeEvening: {},

    radiogroup_LeaveHotelLocation: {
        keyName: 'HotelLocationTypeID',
        labelText: 'Hotel Location',
        labelPosition: 'after',
        dataSource: orionStaticValues.locationTypes
    },
    radio_LeaveHotelByPier: {},
    radio_LeaveHotelByAirport: {},

    radiogroup_LeaveTransfers: {
        keyName: 'TransitTypeID',
        labelText: '',
        labelPosition: 'after',
        dataSource: orionStaticValues.transferData.transitTypes.leave
    },
    radio_LeaveTransferPierToAirport: {},
    radio_LeaveTransferPierToHotel: {},
    radio_LeaveTransferHotelToAirport: {},

    searchbox_Vendors: {},

    textarea_EmployeeNotes: {
        keyName: 'Notes',
        labelText: 'Employee Note'
    },
    textarea_EmployeeMedicalNotes: {
        keyName: 'Medical',
        labelText: 'Medical Notes'
    },
    textarea_JoinAirNotes: {
        keyName: 'RequestNotes',
        labelText: ''
    },
    textarea_JoinTravelCoordinatorNotes: {
        keyName: 'ProcessingStatusNotes',
        labelText: ''
    },
    textarea_JoinHotelCheckinNotes: {
        keyName: 'HotelCheckinNotes',
        labelText: 'Hotel Check-in Notes'
    },
    textarea_JoinHotelCheckoutNotes: {
        keyName: 'HotelCheckoutNotes',
        labelText: 'Hotel Check-out Notes'
    },
    textarea_JoinTransferNotes: {
        keyName: 'TransferNotes',
        labelText: ''
    },
    textarea_LeaveAirNotes: {
        keyName: 'RequestNotes',
        labelText: ''
    },
    textarea_LeaveTravelCoordinatorNotes: {
        keyName: 'ProcessingStatusNotes',
        labelText: ''
    },
    textarea_LeaveHotelCheckinNotes: {
        keyName: 'HotelCheckinNotes',
        labelText: 'Hotel Check-in Notes'
    },
    textarea_LeaveHotelCheckoutNotes: {
        keyName: 'HotelCheckoutNotes',
        labelText: 'Hotel Check-out Notes'
    },
    textarea_LeaveTransferNotes: {
        keyName: 'TransferNotes',
        labelText: ''
    },

    textbox_EmployeeFirstName: {
        keyName: 'FirstName',
        labelText: 'First Name'
    },
    textbox_EmployeeLastName: {
        keyName: 'LastName',
        labelText: 'Last Name'
    },
    textbox_VisaOtherVisaType: {
        keyName: 'OtherVisaType',
        labelText: 'Other Visa Type'
    },
    textbox_PassportNumber: {
        keyName: 'PassportNumber',
        labelText: 'Passport Number'
    },
    textbox_ProjectName: {
        keyName: 'Name',
        labelText: 'Project Name'
    },
    textbox_JoinRequestStatus: {
        keyName: 'ProcessingStatusTypeName',
        labelText: ''
    },
    textbox_LeaveRequestStatus: {
        keyName: 'ProcessingStatusTypeName',
        labelText: ''
    },
    textbox_UserLoginID: {
        keyName: 'LoginID',
        labelText: 'Login ID'
    },
    textbox_UserFirstName: {
        keyName: 'FirstName',
        labelText: 'First Name'
    },
    textbox_UserLastName: {
        keyName: 'LastName',
        labelText: 'Last Name'
    },
    textbox_UserPassword: {
        keyName: 'Password',
        labelText: 'Password'
    },
    textbox_UserEmail: {
        keyName: 'EmailAddress',
        labelText: 'Email'
    },
    textbox_UserWorkPhone: {
        keyName: 'WorkPhone',
        labelText: 'Work Phone'
    },
    textbox_UserMobilePhone: {
        keyName: 'MobilePhone',
        labelText: 'Mobile Phone'
    },
    textbox_UserWorkFax: {
        keyName: 'WorkFax',
        labelText: 'Work Fax'
    },
    textbox_VendorCode: {
        keyName: 'VendorCode',
        labelText: 'Vendor Code'
    },
    textbox_VendorName: {
        keyName: 'VendorName',
        labelText: 'Vendor Name'
    },
    textbox_VendorEmail: {
        keyName: 'VendorEmail',
        labelText: 'Primary Email'
    },
    textbox_VisaIssuingOffice: {
        keyName: 'VisaIssuingOffice',
        labelText: 'Visa Issuing Office'
    },
    textbox_VisaNumber: {
        keyName: 'VisaNumber',
        labelText: 'Visa Number'
    },

    toggleselector_Navbar: {
        leftOptionText: 'Day-to-Day',
        leftOptionValue: 1,
        rightOptionText: 'Drydock',
        rightOptionValue: 2,
        onClick: function () {
            console.log('orionInputs.toggleselector_Navbar.onClick');
            var grid = $('#grid_Projects').data('kendoGrid');
            grid.dataSource.read();
        }
    },

    upload_Employeephoto: {
        build: function () {
            $('#upload_Employeephoto').kendoUpload({
                async: {
                    saveUrl: 'Window/SaveEmployeephoto',
                    removeUrl: 'Window/RemoveEmployeephoto',
                    autoUpload: true
                },
                multiple: false,
                localization: {
                    select: 'Select File...'
                },
                error: orionInputs.upload_Employeephoto.onError,
                complete: orionInputs.upload_Employeephoto.onComplete,
                remove: orionInputs.upload_Employeephoto.onRemove
            });
        },
        onError: function (e) {
            var responseText = e.XMLHttpRequest.responseText;
            var title = responseText.substring(responseText.indexOf('<title>') + 7, responseText.indexOf('</title>'));
            alert('Error uploading photo!\n\n' + title);
        },
        onComplete: function (e) {
            var thumbnail = $('#img_EmployeephotoThumbnail')[0];
            var originalPhoto = orionInputs.upload_Employeephoto.originalPhoto;
            var newPhoto = $('span.k-file-name')[0].title; // Get newly updated photo filename
            orionInputs.upload_Employeephoto.newPhoto = newPhoto;
            thumbnail.src = '/SubDCS.WebUI/UpImage/' + newPhoto; // Change the thumbnail source to the path of the new photo
            $('#btn_EmployeephotoRemove')[0].setAttribute('style', 'display: none'); // Hide 'remove photo button' (red X in the upper-right corner of the thumbnail)
        },
        onRemove: function (e) {
            var thumbnail = $('#img_EmployeephotoThumbnail')[0];
            var originalPhoto = orionInputs.upload_Employeephoto.originalPhoto;
            var photo = originalPhoto !== '' ? originalPhoto : 'noPhotoUploaded.png';
            var removePhotoButton = $('#btn_EmployeephotoRemove')[0];
            var display = originalPhoto === '' ? 'none' : 'inline';
            removePhotoButton.setAttribute('style', 'display: ' + display);
            thumbnail.src = '/Orion.WebUI/UpImage/' + photo;
            orionInputs.upload_Employeephoto.newPhoto = '';
        },
        originalPhoto: '',
        newPhoto: '',
        set: function () {
            var photoExists = false;
            var fileName = 'noPhotoUploaded.png';
            var originalPhoto = '';
            var displayOfRemoveButton = 'none';
            if (orionInfoViews.employeeInfoView.itemBeingEdited !== null) {
                if (orionInfoViews.employeeInfoView.itemBeingEdited.Photos.length > 0) {
                    photoExists = true;
                    fileName = orionInfoViews.employeeInfoView.itemBeingEdited.Photos[0].PhotoFileName;
                    displayOfRemoveButton = 'inline';
                }
            }
            $('#img_EmployeephotoThumbnail')[0].src = 'UpImage/' + fileName;
            orionInputs.upload_Employeephoto.originalPhoto = fileName;
            $('#btn_EmployeephotoRemove')[0].setAttribute('style', 'display: ' + displayOfRemoveButton);
        }
    }
};

var orionInfoViews = {
    travelGridsView: {
        travelGrids: [
            'grid_PendingCoordinatorReview',
            'grid_AllPendingRequests',
            'grid_PendingFlightRequests',
            'grid_PendingLodgingRequests',
            'grid_PendingTransferRequests'
        ],
        grids: [
            'grid_PendingCoordinatorReview',
            'grid_AllPendingRequests',
            'grid_PendingFlightRequests',
            'grid_PendingLodgingRequests',
            'grid_PendingTransferRequests'
        ],
        approveRequest: function (requestID) {
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID
                },
                url: 'AirTravel/ApproveAirTravelRequest',
                success: function (request) {
                    orionElements.notification_Orion.show('Request approved');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/ApproveAirTravelRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        approveCancellationRequest: function (requestID) {
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID
                },
                url: 'AirTravel/ApproveCancellationRequest',
                success: function (request) {
                    orionElements.notification_Orion.show('Cancellation Request Approved');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/ApproveCancellationRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        rejectRequest: function (requestID, reason) {
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID,
                    reason: reason
                },
                url: 'AirTravel/RejectAirTravelRequest',
                success: function (request) {
                    orionElements.notification_Orion.show('Request Rejected');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/RejectAirTravelRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        rejectCancellationRequest: function (requestID) {
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID
                },
                url: 'AirTravel/RejectCancellationRequest',
                success: function (request) {
                    orionElements.notification_Orion.show('Cancellation Request Rejected');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/ApproveCancellationRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        refreshTravelGrids: function () {
            $.each(orionInfoViews.travelGridsView.grids, function (index, gridID) {
                var gridElement = $('#' + gridID);
                if (gridElement.length > 0) {
                    var grid = $('#' + gridID).data('kendoGrid');
                    grid.dataSource.read();
                }
            });
        },
        refreshGrids: function () {
            $.each(orionInfoViews.travelGridsView.travelGrids, function (index, gridID) {
                var gridRoot = orionGrids[gridID];
                fts.refreshGrid(gridRoot);
            });
        }
    },
    employeeInfoView: {
        inputs: {
            FirstName: orionInputs.textbox_EmployeeFirstName,
            LastName: orionInputs.textbox_EmployeeLastName,
            DateOfBirth: orionInputs.datepicker_EmployeeDateOfBirth,
            GenderID: orionInputs.ddl_EmployeeGender,
            CountryOfResidenceID: orionInputs.ddl_EmployeeCountryOfResidence,
            Notes: orionInputs.textarea_EmployeeNotes,
            Medical: orionInputs.textarea_EmployeeMedicalNotes
        },
        itemBeingEdited: null,
        load: function () {
            orionInfoViews.infoview_Passport.disableInputs();
            orionInfoViews.infoview_Visa.disableInputs();

            var theseInputs = orionInfoViews.employeeInfoView.inputs;

            //Passport Data
            var passportDDL = fts.getWidgetByRoot(orionInputs.ddl_EmployeePassports);
            passportDDL.dataSource.data([]);
            passportDDL.text('');
            passportDDL.dataSource.read();

            //Visa Data
            var visaDDL = fts.getWidgetByRoot(orionInputs.ddl_EmployeeVisas);
            visaDDL.dataSource.data([]);
            visaDDL.text('');
            visaDDL.dataSource.read();

            $.each(theseInputs, function (propertyName, input) {
                if (propertyName !== 'Notes' && propertyName !== 'Medical') {
                    var value = !orionInfoViews.employeeInfoView.itemBeingEdited ? 'ftsReset' : orionInfoViews.employeeInfoView.itemBeingEdited[propertyName];
                    fts.value(input,value);
                }
            });
            orionInputs.upload_Employeephoto.set();

            var employeeNoteText = '';
            if (orionInfoViews.employeeInfoView.itemBeingEdited !== null) {
                if (orionInfoViews.employeeInfoView.itemBeingEdited.Notes.length > 0) {
                    var activeNotes = [];
                    var activeNote = null;
                    for (var n = 0; n < orionInfoViews.employeeInfoView.itemBeingEdited.Notes.length; n++) {
                        if (orionInfoViews.employeeInfoView.itemBeingEdited.Notes[n].IsActive) {
                            activeNotes[activeNotes.length] = orionInfoViews.employeeInfoView.itemBeingEdited.Notes[n].Note;
                            activeNote = orionInfoViews.employeeInfoView.itemBeingEdited.Notes[n];
                            employeeNoteText = activeNote.Note;
                        }
                    }
                    for (var k = 1; k < activeNotes.length; k++) {
                        if (activeNotes[k].LastUpdatedDateTime > activeNote.LastUpdatedDateTime) {
                            activeNote = activeNotes[k];
                            employeeNoteText = activeNote.Note;
                        }
                    }
                }
            }
            var visaID = null;
            if (orionInfoViews.employeeInfoView.itemBeingEdited !== null) {
                if (orionInfoViews.employeeInfoView.itemBeingEdited.Visas.length > 0) {
                    visa = orionInfoViews.employeeInfoView.itemBeingEdited.Visas[0].ID;
                }
            }
            fts.value(orionInputs.textarea_EmployeeNotes, employeeNoteText);
            var medicalNoteText = '';
            if (orionInfoViews.employeeInfoView.itemBeingEdited !== null) {
                if (orionInfoViews.employeeInfoView.itemBeingEdited.Medical.length > 0) {
                    var activeMedicals = [];
                    var activeMedical = null;
                    for (var p = 0; p < orionInfoViews.employeeInfoView.itemBeingEdited.Medical.length; p++) {
                        if (orionInfoViews.employeeInfoView.itemBeingEdited.Medical[p].IsActive) {
                            activeMedicals[activeMedicals.length] = orionInfoViews.employeeInfoView.itemBeingEdited.Medical[p].EmployeeMedicalNote;
                            activeMedical = orionInfoViews.employeeInfoView.itemBeingEdited.Medical[p];
                            medicalNoteText = activeMedical.EmployeeMedicalNote;
                        }
                    }
                    for (var q = 1; q < activeMedicals.length; q++) {
                        if (activeMedicals[q].LastUpdatedDateTime > activeMedical.LastUpdatedDateTime) {
                            activeMedical = activeMedicals[q];
                            medicalNoteText = activeMedical.EmployeeMedicalNote;
                        }
                    }
                }
            }
            fts.value(orionInputs.textarea_EmployeeMedicalNotes, medicalNoteText);

            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
        },
        save: function (e) {
            if (orionSessionVariables.UserGroupID !== orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                && !orionGrids.grid_Vendors.selectedVendor) {
                alert('Please select a Vendor first!');
            }
            else {
                var vendorID = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                    ? orionSessionVariables.VendorID
                    : orionGrids.grid_Vendors.selectedVendor.ID;
                var employeeID = !orionInfoViews.employeeInfoView.itemBeingEdited
                    ? 0
                    : orionInfoViews.employeeInfoView.itemBeingEdited.ID;
                var requiredFields = [
                    orionInputs.textbox_EmployeeFirstName,
                    orionInputs.textbox_EmployeeLastName,
                    orionInputs.datepicker_EmployeeDateOfBirth,
                    orionInputs.ddl_EmployeeCountryOfResidence
                ];
                var blankFields = '';
                $.each(requiredFields, function (index, inputRoot) {
                    var value = fts.value(inputRoot);
                    if (value === '' || value === null || value === undefined) {
                        blankFields += '\n   ' + inputRoot.labelText;
                    }
                });


                if (blankFields !== '') {
                    alert('The following fields cannot be blank:' + blankFields);
                }
                else {
                    ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
                    $.ajax({
                        type: 'POST',
                        url: 'Window/UpsertEmployee',
                        data: {
                            employeeID: employeeID,
                            vendorID: vendorID,
                            firstName: fts.value(orionInputs.textbox_EmployeeFirstName),
                            lastName: fts.value(orionInputs.textbox_EmployeeLastName),
                            dateOfBirth: fts.value(orionInputs.datepicker_EmployeeDateOfBirth),
                            countryOfResidenceID: fts.value(orionInputs.ddl_EmployeeCountryOfResidence),
                            genderID: fts.value(orionInputs.ddl_EmployeeGender),
                            employeeNoteText: fts.value(orionInputs.textarea_EmployeeNotes),
                            employeeMedicalNoteText: fts.value(orionInputs.textarea_EmployeeMedicalNotes),
                            isActive: true
                        },
                        success: function (employeeInfoView) {
                            var employeesGrid = fts.getWidgetByRoot(orionGrids.grid_Employees);
                            var birthDate = new Date(parseInt(employeeInfoView.DateOfBirth.substr(6)));
                            employeeInfoView.DateOfBirth = birthDate;
                            if (employeeID === 0) {
                                orionInfoViews.employeeInfoView.itemBeingEdited = employeeInfoView;
                                orionInfoViews.employeeInfoView.itemBeingEdited.VendorID = orionSessionVariables.VendorID === 0 ? orionGrids.grid_Vendors.selectedVendor.ID : orionSessionVariables.VendorID;
                                employeesGrid.dataSource.add({
                                    ID: employeeInfoView.ID,
                                    VendorID: orionInfoViews.employeeInfoView.itemBeingEdited.VendorID,
                                    LastName: employeeInfoView.LastName,
                                    FirstName: employeeInfoView.FirstName,
                                    DateOfBirth: employeeInfoView.DateOfBirth,
                                    GenderID: employeeInfoView.GenderID,
                                    GenderCode: employeeInfoView.GenderCode,
                                    GenderName: employeeInfoView.GenderName,
                                    CountryOfResidenceID: employeeInfoView.CountryOfResidenceID,
                                    Passports: employeeInfoView.Passports,
                                    Visas: employeeInfoView.Visas,
                                    Photos: employeeInfoView.Photos,
                                    Medical: employeeInfoView.Medical,
                                    Notes: employeeInfoView.Notes,
                                    IsActive: employeeInfoView.IsActive
                                });
                                orionElements.notification_Orion.show('Employee created');
                            }
                            else { // If an existing employee was updated
                                // If employee was set to inactive, remove row
                                if (!employeeInfoView.IsActive) {
                                    employeesGrid.removeRow(fts.rowOfClickedButton);
                                    fts.rowOfClickedButton = null;
                                }
                                // If employee is still active, update row
                                else {
                                    var row = $(employeesGrid.dataItem(fts.rowOfClickedButton));

                                    $.each(orionInfoViews.employeeInfoView.itemBeingEdited, function (key, value) {
                                        if (orionInfoViews.employeeInfoView.itemBeingEdited[key] !== employeeInfoView[key]) {
                                            orionInfoViews.employeeInfoView.itemBeingEdited[key] = employeeInfoView[key];
                                        }
                                    });

                                    orionElements.notification_Orion.show('Employee updated');

                                    fts.getWidgetByRoot(orionGrids.grid_Employees).dataSource.read();
                                }
                            }
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert('Window/UpsertEmployee\nAn error occurred... Check the console (F12) for more information!');
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        }
                    });
                }
            }
        },
        reset: function (e) {
            $.each(orionInfoViews.employeeInfoView.inputs, function (index, input) {
                fts.value(input, 'ftsReset');
            });
        }
    },
    infoview_Passport: {
        itemBeingEdited: null,
        viewModelFields: [],
        inputs: function () {
            var inputs = {
                PassportNumber: orionInputs.textbox_PassportNumber,
                CountryID: orionInputs.ddl_PassportCountry,
                IssueDate: orionInputs.datepicker_PassportIssueDate,
                ExpirationDate: orionInputs.datepicker_PassportExpirationDate
            };
            return inputs;
        },
        load: function (selectedPassportID) {
            ftsConfig.ftsLoadingIndicator.show(fts.getElement(orionInfoViews.infoview_Passport));
            $.ajax({
                type: 'Get',
                url: 'DropDownList/GetPassportByID',
                data: {
                    passportID: selectedPassportID
                },
                success: function (retrievedPassport) {
                    orionInfoViews.infoview_Passport.selectedItem = retrievedPassport;
                    var inputs = orionInfoViews.infoview_Passport.inputs();
                    $.each(inputs, function (fieldName, input) {
                        fts.value(input, retrievedPassport[fieldName]);
                    });
                    orionInfoViews.infoview_Passport.disableInputs();
                    ftsConfig.ftsLoadingIndicator.hide(fts.getElement(orionInfoViews.infoview_Passport));
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('DropDownList/GetPassportByID\nAn error occurred... Check the console (F12) for more information!');
                    ftsConfig.ftsLoadingIndicator.hide(fts.getElement(orionInfoViews.infoview_Passport));
                }
            });
        },
        save: function () {
            var inputs = orionInfoViews.infoview_Passport.inputs();
            if (fts.validateFields(orionInfoViews.infoview_Passport)) {
                //var dataObject = fts.populateObjectWithInputValues(root.itemBeingEdited, inputs);
                $.each(inputs, function (fieldName, input) {
                    var inputValue = fts.value(input);
                    orionInfoViews.infoview_Passport.itemBeingEdited[fieldName] = inputValue;
                });
                orionInfoViews.infoview_Passport.upsert();
            }
        },
        upsert: function () {
            var item = orionInfoViews.infoview_Passport.itemBeingEdited;
            $.ajax({
                type: 'POST',
                url: 'Window/UpsertPassport',
                data: {
                    PassportID: item.PassportID,
                    EmployeeID: item.EmployeeID,
                    PassportNumber: item.PassportNumber,
                    CountryID: item.CountryID,
                    IssueDate: item.IssueDate,
                    ExpirationDate: item.ExpirationDate,
                    IsActive: item.IsActive
                },
                success: function (upsertedPassport) {
                    orionInfoViews.infoview_Passport.itemBeingEdited = upsertedPassport;
                    var notificationText = upsertedPassport.IsActive ? 'Passport saved' : 'Passport deleted';
                    orionInfoViews.infoview_Passport.reset(notificationText);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/UpsertPassport\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        enableInputs: function () {
            var inputs = orionInfoViews.infoview_Passport.inputs();
            $.each(inputs, function (index, input) {
                fts.disableAnInput(input, false);
            });
        },
        disableInputs: function () {
            var inputs = orionInfoViews.infoview_Passport.inputs();
            $.each(inputs, function (index, input) {
                fts.disableAnInput(input, true);
            });
        },
        reset: function (notificationText) {
            if (notificationText !== 'Passport deleted') {
                orionElements.toolbar_EmployeePassports.toggle();
            }
            fts.resetInputs(orionInfoViews.infoview_Passport.inputs());
            orionInfoViews.infoview_Passport.disableInputs();
            fts.getWidgetByRoot(orionInputs.ddl_EmployeePassports).dataSource.read();
            orionElements.notification_Orion.show(notificationText);
        },
        selectedItem: null
    },
    infoview_Visa: {
        itemBeingEdited: null,
        viewModelFields: [],
        inputs: function () {
            var inputs = {
                VisaNumber: orionInputs.textbox_VisaNumber,
                VisaTypeID: orionInputs.ddl_VisaTypeID,
                IssuingOffice: orionInputs.textbox_VisaIssuingOffice,
                CountryID: orionInputs.ddl_VisaCountryID,
                ValidFromDate: orionInputs.datepicker_VisaValidFromDate,
                ValidToDate: orionInputs.datepicker_VisaValidToDate,
                OtherVisaType: orionInputs.textbox_VisaOtherVisaType
            };
            return inputs;
        },
        load: function (selectedVisaID) {
            ftsConfig.ftsLoadingIndicator.show(fts.getElement(orionInfoViews.infoview_Visa));
            $.ajax({
                type: 'Get',
                url: 'DropDownList/GetVisaByID',
                data: {
                    visaID: selectedVisaID
                },
                success: function (retrievedVisa) {
                    orionInfoViews.infoview_Visa.selectedItem = retrievedVisa;
                    var inputs = orionInfoViews.infoview_Visa.inputs();
                    $.each(inputs, function (fieldName, input) {
                        fts.value(input, retrievedVisa[fieldName]);
                    });
                    orionInfoViews.infoview_Visa.disableInputs();
                    ftsConfig.ftsLoadingIndicator.hide(fts.getElement(orionInfoViews.infoview_Visa));
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('DropDownList/GetVisaByID\nAn error occurred... Check the console (F12) for more information!');
                    ftsConfig.ftsLoadingIndicator.hide(fts.getElement(orionInfoViews.infoview_Visa));
                }
            });
        },
        save: function () {
            var inputs = orionInfoViews.infoview_Visa.inputs();
            if (fts.validateFields(orionInfoViews.infoview_Visa)) {
                //var dataObject = fts.populateObjectWithInputValues(root.itemBeingEdited, inputs);
                $.each(inputs, function (fieldName, input) {
                    var inputValue = fts.value(input);
                    orionInfoViews.infoview_Visa.itemBeingEdited[fieldName] = inputValue;
                });
                orionInfoViews.infoview_Visa.upsert();
            }
        },
        upsert: function () {
            var item = orionInfoViews.infoview_Visa.itemBeingEdited;
            item.OtherVisaType = fts.value(orionInputs.textbox_VisaOtherVisaType);
            $.ajax({
                type: 'POST',
                url: 'Window/UpsertVisa',
                data: {
                    VisaID: item.VisaID,
                    EmployeeID: item.EmployeeID,
                    VisaNumber: item.VisaNumber,
                    CountryID: item.CountryID,
                    IssuingOffice: item.IssuingOffice,
                    ValidFromDate: item.ValidFromDate,
                    ValidToDate: item.ValidToDate,
                    VisaTypeID: item.VisaTypeID,
                    OtherVisaType: item.OtherVisaType,
                    IsActive: item.IsActive
                },
                success: function (upsertedVisa) {
                    orionInfoViews.infoview_Visa.itemBeingEdited = upsertedVisa;
                    var notificationText = upsertedVisa.IsActive ? 'Visa saved' : 'Visa deleted';
                    orionInfoViews.infoview_Visa.reset(notificationText);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/UpsertVisa\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        enableInputs: function () {
            var inputs = orionInfoViews.infoview_Visa.inputs();
            $.each(inputs, function (index, input) {
                fts.disableAnInput(input, false);
            });
        },
        disableInputs: function () {
            var inputs = orionInfoViews.infoview_Visa.inputs();
            $.each(inputs, function (index, input) {
                fts.disableAnInput(input, true);
            });
        },
        reset: function (notificationText) {
            if (notificationText !== 'Visa deleted') {
                orionElements.toolbar_EmployeeVisas.toggle();
            }
            fts.resetInputs(orionInfoViews.infoview_Visa.inputs());
            orionInfoViews.infoview_Visa.disableInputs();
            fts.getWidgetByRoot(orionInputs.ddl_EmployeeVisas).dataSource.read();
            orionElements.notification_Orion.show(notificationText);
        },
        selectedItem: null
    },
    infoview_UserGroups: {
        inputs: function () {
            var checkboxes = $('#tabstrip_Settings > div.ftsWrapper:first-of-type .ftsCheckbox');
            return checkboxes;
        },
        load: function (userGroupID) {
            ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
            orionInfoViews.infoview_UserGroups.resetCheckboxes();

            $.each([$('#checkbox_Actions217'), $('#checkbox_Actions218')], function(index, checkbox) {
                $(checkbox).parent().css('display', userGroupID === orionStaticValues.security.userGroups.SuperUser.ID ? 'none' : 'inline-block');
            });

            $.ajax({
                type: 'GET',
                data: {
                    userGroupID: userGroupID
                },
                url: 'Settings/GetActionsByUserGroupID',
                success: function (results) {
                    console.log('GetActionsByUserGroupID --> Success');
                    $.each(results, function (key, value) {
                        $('#checkbox_Actions' + value.ActionID)[0].checked = value.IsActive;
                    });
                    var disabledValue = !orionSessionVariables.ActionIDs.includes(orionStaticValues.security.actions.UpdateUserGroupPermissions.ID);
                    orionInfoViews.infoview_UserGroups.disableCheckboxes(disabledValue);
                    ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Settings/GetActionsByUserGroupID\nAn error occurred... Check the console (F12) for more information!');
                    ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                }
            });
        },
        save: function (e) {
            var userGroupID = fts.value(orionInputs.ddl_SettingsUserGroups);
            var actionID = parseInt(e.target.id.split('checkbox_Actions')[1]);
            var value = e.target.checked;
            $.ajax({
                type: 'POST',
                data: {
                    userGroupID: userGroupID,
                    actionID: actionID,
                    value: value
                },
                url: 'Settings/SaveUserGroupAction',
                success: function (upsertedXref) {
                    console.log('userGroupAction saved');
                    if (upsertedXref.UserGroupID === orionSessionVariables.UserGroupID) {
                        var actionIndex = null;
                        $.each(orionSessionVariables.ActionIDs, function (index, actionID) {
                            if (actionIndex === null) {
                                if (actionID === upsertedXref.ActionID) {
                                    actionIndex = index;
                                }
                            }
                        });
                        if (upsertedXref.IsActive) {
                            if (actionIndex === null) {
                                orionSessionVariables.ActionIDs.push(upsertedXref.ActionID);
                            }
                        }
                        else {
                            if (actionIndex !== null) {
                                orionSessionVariables.ActionIDs.splice(actionIndex, 1);
                            }
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Settings/SaveUserGroupAction\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        resetCheckboxes: function () {
            var checkboxes = orionInfoViews.infoview_UserGroups.inputs();
            $.each(checkboxes, function (index, checkbox) {
                checkbox.checked = false;
            });
        },
        disableCheckboxes: function (value) {
            var checkboxes = orionInfoViews.infoview_UserGroups.inputs();
            $.each(checkboxes, function (index, checkbox) {
                $(checkbox).attr('disabled', value);
            });
        },
        flag_checkboxClick: false,
        checkbox_onChange: function (e) {
            if (orionInfoViews.infoview_UserGroups.flag_checkboxClick === true) {
                orionInfoViews.infoview_UserGroups.flag_checkboxClick = false;
                orionInfoViews.infoview_UserGroups.save(e);
            }
        },
        checkbox_onClick: function (e) {
            orionInfoViews.infoview_UserGroups.flag_checkboxClick = true;
        }
    },
    projectInfoView: {
        inputs: {
            BrandID: orionInputs.ddl_ProjectBrand,
            StartDate: orionInputs.datepicker_ProjectStartDate,
            EndDate: orionInputs.datepicker_ProjectEndDate,
            LocationID: orionInputs.ddl_ProjectLocation,
            ProjectTypeID: orionInputs.ddl_ProjectType,
            ProjectFunctionID: orionInputs.ddl_ProjectFunction,
            MaximumAllowedContractorCount: orionInputs.numerictextbox_MaximumAllowedContractorCount,
            Name: orionInputs.textbox_ProjectName,
            IsActive: orionInputs.checkbox_ProjectIsActive
        },
        load: function () {
            ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
            $.each(orionInfoViews.projectInfoView.inputs, function (propertyName, input) {
                if (propertyName === 'BrandID' || propertyName === 'LocationID' || propertyName === 'ProjectFunctionID') {
                    // If creating a new project, set the Brand, Location, and Project Function ddl's to null
                    if (!orionGrids.grid_Projects.loadedProject) {
                        fts.value(input, 'ftsReset');
                    }
                }
                else {
                    fts.value(input, orionGrids.grid_Projects.loadedProject ? orionGrids.grid_Projects.loadedProject[propertyName] : 'ftsReset');
                }
            });
            if (orionGrids.grid_Projects.loadedProject) {
                orionInputs.ddl_ProjectBrand.loadingBrand = true;
                fts.getWidgetByRoot(orionInputs.ddl_ProjectBrand).dataSource.read();
            } else {
                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
            }
        },
        save: function (e) {
            var projectID = !orionGrids.grid_Projects.loadedProject ? 0 : orionGrids.grid_Projects.loadedProject.ID;
            var projectName = fts.value(orionInputs.textbox_ProjectName);
            var brandID = fts.value(orionInputs.ddl_ProjectBrand);
            var startDate = fts.value(orionInputs.datepicker_ProjectStartDate);
            var endDate = fts.value(orionInputs.datepicker_ProjectEndDate);
            var locationID = fts.value(orionInputs.ddl_ProjectLocation);
            var projectTypeID = fts.value(orionInputs.ddl_ProjectType);
            var projectFunctionID = fts.value(orionInputs.ddl_ProjectFunction);
            var numbox = fts.getWidgetByRoot(orionInputs.numerictextbox_MaximumAllowedContractorCount);
            var maximumAllowedContractorCount = numbox.value();
            var notes = !orionGrids.grid_Projects.loadedProject ? '' : orionGrids.grid_Projects.loadedProject.Notes !== null ? orionGrids.grid_Projects.loadedProject.Notes : '';
            var projectIsActive = fts.value(orionInputs.checkbox_ProjectIsActive);

            var requiredFieldsBlank = '';
            requiredFieldsBlank = !brandID ? requiredFieldsBlank + '\n   Brand' : requiredFieldsBlank;
            requiredFieldsBlank = !startDate ? requiredFieldsBlank + '\n   Start Date' : requiredFieldsBlank;
            requiredFieldsBlank = !endDate ? requiredFieldsBlank + '\n   End Date' : requiredFieldsBlank;
            requiredFieldsBlank = !locationID ? requiredFieldsBlank + '\n   Ship' : requiredFieldsBlank;
            requiredFieldsBlank = !projectTypeID ? requiredFieldsBlank + '\n   Type' : requiredFieldsBlank;
            requiredFieldsBlank = !projectFunctionID ? requiredFieldsBlank + '\n   Reason' : requiredFieldsBlank;
            requiredFieldsBlank = !maximumAllowedContractorCount ? requiredFieldsBlank + '\n   Max Employee Qty' : requiredFieldsBlank;

            if (requiredFieldsBlank !== '') {
                alert('The following fields cannot be blank:' + requiredFieldsBlank);
            } else {
                var proceedWithUpsert = true;
                if (projectID !== 0) {
                    if (orionGrids.grid_Projects.loadedProject.QtyEmployeesAssigned > maximumAllowedContractorCount) {
                        alert('Max Employee Qty (' + maximumAllowedContractorCount + ') cannot be lower than the current number of assigned employees (' + orionGrids.grid_Projects.loadedProject.QtyEmployeesAssigned + ')');
                        proceedWithUpsert = false;
                    } else if (!projectIsActive) {
                        proceedWithUpsert = confirm('Set project to inactive?');
                    }
                }
                if (proceedWithUpsert) {
                    ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
                    $.ajax({
                        type: 'Post',
                        url: 'Window/UpsertProject',
                        data: {
                            projectID: projectID,
                            projectName: projectName,
                            brandID: brandID,
                            startDate: startDate,
                            endDate: endDate,
                            locationID: locationID,
                            projectTypeID: projectTypeID,
                            projectFunctionID: projectFunctionID,
                            maximumAllowedContractorCount: maximumAllowedContractorCount,
                            notes: notes,
                            isActive: projectIsActive
                        },
                        success: function (projectInfoView) {
                            var startDate = new Date(parseInt(projectInfoView.StartDate.substr(6)));
                            var endDate = new Date(parseInt(projectInfoView.EndDate.substr(6)));
                            // Newly created projects
                            if (projectID === 0) {
                                fts.getWidgetByRoot(orionGrids.grid_Projects).dataSource.add({
                                    ID: projectInfoView.ID,
                                    Name: projectInfoView.Name,
                                    StartDate: startDate,
                                    EndDate: endDate,
                                    ProjectTypeID: projectInfoView.ProjectTypeID,
                                    ProjectTypeName: projectInfoView.ProjectTypeName,
                                    BrandID: projectInfoView.BrandID,
                                    BrandName: projectInfoView.BrandName,
                                    BrandAbbrev: projectInfoView.BrandAbbrev,
                                    LocationID: projectInfoView.LocationID,
                                    LocationName: projectInfoView.LocationName,
                                    ProjectFunctionID: projectInfoView.ProjectFunctionID,
                                    ProjectFunctionName: projectInfoView.ProjectFunctionName,
                                    MaximumAllowedContractorCount: projectInfoView.MaximumAllowedContractorCount,
                                    QtyEmployeesAssigned: projectInfoView.QtyEmployeesAssigned,
                                    Notes: projectInfoView.Notes
                                });
                                ////Select newly created project row
                                //var rows = fts.getWidgetByRoot(orionGrids.grid_Projects).items();
                                //for (var i = 0; i < rows.length; i++) {
                                //    var row = rows[i];
                                //    var row_dataItem = fts.getWidgetByRoot(orionGrids.grid_Projects).dataItem(row);
                                //    if (row_dataItem.ID === projectInfoView.ID) {
                                //        orionGrids.grid_Projects.rowClicked = true;
                                //        fts.getWidgetByRoot(orionGrids.grid_Projects).select(row);
                                //        orionGrids.grid_Projects.loadedProject = row_dataItem;
                                //        orionGrids.grid_Projects.selectedProject = row_dataItem;
                                //        break;
                                //    }
                                //}
                                orionElements.notification_Orion.show('Project created');
                                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                                fts.getWidgetByRoot(orionWindows.window_ProjectInfo).close();
                            }
                            // Update of an existing project
                            else {
                                if (!projectInfoView.IsActive) {
                                    fts.getWidgetByRoot(orionGrids.grid_Projects).removeRow(fts.rowOfClickedButton);
                                    var togglePanels = false;
                                    if (orionGrids.grid_Projects.selectedProject !== null) {
                                        if (projectInfoView.ProjectID === orionGrids.grid_Projects.selectedProject.ProjectID) {
                                            orionGrids.grid_Projects.selectedProject = null;
                                            togglePanels = true;
                                        }
                                    }
                                    fts.rowOfClickedButton = null;
                                    orionElements.notification_Orion.show('Project deactivated');
                                    fts.getWidgetByRoot(orionWindows.window_ProjectInfo).close();
                                    if ($('#contentwrapper_Projects').attr('display') !== 'none') {
                                        fts.togglePrimaryPanels();
                                    }
                                }
                                else {
                                    var existingProjectRow = fts.getWidgetByRoot(orionGrids.grid_Projects).dataItem(fts.rowOfClickedButton);
                                    $(existingProjectRow.set('ID', projectInfoView.ID));
                                    $(existingProjectRow.set('Name', projectInfoView.Name));
                                    $(existingProjectRow.set('ProjectTypeID', projectInfoView.ProjectTypeID));
                                    $(existingProjectRow.set('ProjectTypeName', projectInfoView.ProjectTypeName));
                                    $(existingProjectRow.set('BrandID', projectInfoView.BrandID));
                                    $(existingProjectRow.set('BrandName', projectInfoView.BrandName));
                                    $(existingProjectRow.set('BrandAbbrev', projectInfoView.BrandAbbrev));
                                    $(existingProjectRow.set('LocationID', projectInfoView.LocationID));
                                    $(existingProjectRow.set('LocationName', projectInfoView.LocationName));
                                    $(existingProjectRow.set('ProjectFunctionID', projectInfoView.ProjectFunctionID));
                                    $(existingProjectRow.set('ProjectFunctionName', projectInfoView.ProjectFunctionName));
                                    $(existingProjectRow.set('StartDate', projectInfoView.StartDate));
                                    $(existingProjectRow.set('EndDate', projectInfoView.EndDate));
                                    $(existingProjectRow.set('QtyEmployeesAssigned', projectInfoView.QtyEmployeesAssigned));
                                    $(existingProjectRow.set('MaximumAllowedContractorCount', projectInfoView.MaximumAllowedContractorCount));
                                    $(existingProjectRow.set('Notes', projectInfoView.Notes));
                                    $(existingProjectRow.set('IsActive', projectInfoView.IsActive));
                                    $(existingProjectRow.set('LastUpdatedDateTime', projectInfoView.LastUpdatedDateTime));
                                    $(existingProjectRow.set('LastUpdatedByUserID', projectInfoView.LastUpdatedByUserID));
                                    $(existingProjectRow.set('LastUpdatedByLoginID', projectInfoView.LastUpdatedByLoginID));

                                    orionElements.notification_Orion.show('Project updated');
                                }
                                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert('Window/UpsertProject\nAn error occurred... Check the console (F12) for more information!');
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        }
                    });
                }
            }
        },
        reset: function (e) {
            $.each(orionInfoViews.projectInfoView.inputs, function (index, input) {
                fts.value(input, 'ftsReset');
            });
        },
        checkBrandDDL: function (e) {
            var value = fts.value(orionInputs.ddl_ProjectBrand);
            if (value === null || value === 0 || value === '') {
                alert('Please select a Brand first!');
            }
        },
        setBrandForLoadedProject: function (locationID) {
            $.ajax({
                type: 'GET',
                url: 'DropDownList/GetBrandByLocationID',
                data: {
                    locationID: locationID
                },
                success: function (brand) {
                    if (orionGrids.grid_Projects.loadedProject !== null) {
                        orionGrids.grid_Projects.loadedProject.BrandID = brand.ID;
                        orionGrids.grid_Projects.loadedProject.BrandAbbrev = brand.Abbrev;
                        orionGrids.grid_Projects.loadedProject.BrandName = brand.Name;
                    }
                    else {
                        orionGrids.grid_Projects.selectedProject.BrandID = brand.ID;
                        orionGrids.grid_Projects.selectedProject.BrandAbbrev = brand.Abbrev;
                        orionGrids.grid_Projects.selectedProject.BrandName = brand.Name;
                    }

                    orionInputs.ddl_ProjectBrand.loadingBrand = true;
                    fts.getWidgetByRoot(orionInputs.ddl_ProjectBrand).dataSource.read();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('DropDownList/GetBrandByLocationID\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        loadingProjectInfo: false
    },
    vendorInfoView: {
        inputs: {
            Code: orionInputs.textbox_VendorCode,
            Name: orionInputs.textbox_VendorName,
            ContactEmailAddress: orionInputs.textbox_VendorEmail,
            IsActive: orionInputs.checkbox_VendorIsActive
        },
        load: function (e) {
            fts.openWindow(orionWindows.window_VendorInfo);
            ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
            $.each(this.inputs, function (property, input) {
                fts.value(input, !orionGrids.grid_Vendors.loadedVendor ? 'ftsReset' : orionGrids.grid_Vendors.loadedVendor[property]);
            });


            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
        },
        save: function (e) {
            var vendorID = orionGrids.grid_Vendors.loadedVendor !== null && orionGrids.grid_Vendors.loadedVendor !== undefined ? orionGrids.grid_Vendors.loadedVendor.ID : 0;
            var values = {};
            $.each(this.inputs, function (property, input) {
                values[property] = fts.value(input);
            });

            var changesDetected = false;
            if (vendorID !== 0) {
                $.each(values, function (property, value) {
                    if (value !== orionGrids.grid_Vendors.loadedVendor[property]) {
                        changesDetected = true;
                    }
                });
            }

            if (!changesDetected && vendorID !== 0) {
                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
            }
            else {
                var validationFails = '';
                if (values.Code === '') {
                    validationFails += '\n    Vendor Code';
                }
                if (values.Name === '') {
                    validationFails += '\n    Vendor Name';
                }
                if (values.ContactEmailAddress === '') {
                    validationFails += '\n    Primary Email';
                }

                if (validationFails !== '') {
                    alert('The following fields cannot be blank:' + validationFails);
                }
                else if (!fts.validateOnlyOneEmail(values.ContactEmailAddress)) {
                    alert('Please enter only one email address');
                }
                else if (!fts.validateEmail(values.ContactEmailAddress)) {
                    alert('Please enter a valid email address');
                }
                else {
                    if (!values.IsActive) {
                        confirm('Set vendor to inactive?');
                    }
                    if (values.Code.length >= 3 && values.Code.length <= 8 ) {
                        ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        $.ajax({
                            type: 'POST',
                            url: 'Window/UpsertVendor',
                            data: {
                                vendorID: vendorID,
                                vendorCode: values.Code,
                                vendorName: values.Name,
                                contactEmailAddress: values.ContactEmailAddress,
                                isActive: values.IsActive
                            },
                            success: function (vendorInfoView) {
                                var vendorsGrid = fts.getWidgetByRoot(orionGrids.grid_Vendors);
                                var insertedDateTime = new Date(parseInt(vendorInfoView.InsertedDateTime.substr(6)));
                                // If a new vendor was inserted, add it to the grid
                                if (vendorID === 0) {
                                    vendorsGrid.dataSource.add({
                                        ID: vendorInfoView.ID,
                                        Code: vendorInfoView.Code,
                                        Name: vendorInfoView.Name,
                                        ContactEmailAddress: vendorInfoView.ContactEmailAddress,
                                        IsActive: vendorInfoView.IsActive,
                                        InsertedDateTime: insertedDateTime
                                    });
                                    orionElements.notification_Orion.show('Vendor created');
                                }
                                else { // If an existing vendor was updated
                                    // If vendor was set to inactive, remove row
                                    if (vendorInfoView.IsActive === false) {

                                        var thisRow = vendorsGrid.dataItem(fts.rowOfClickedButton);
                                        $(thisRow.set('IsActive', vendorInfoView.IsActive));
                                        var window = $('#window_VendorInfo').data('kendoWindow');
                                        window.close();

                                        fts.rowOfClickedButton = null;
                                    }
                                    // If vendor is still active, update row
                                    else {
                                        var row = vendorsGrid.dataItem(fts.rowOfClickedButton);
                                        $(row.set('ID', vendorInfoView.ID));
                                        $(row.set('Name', vendorInfoView.Name));
                                        $(row.set('Code', vendorInfoView.Code));
                                        $(row.set('ContactEmailAddress', vendorInfoView.ContactEmailAddress));
                                        $(row.set('IsActive', vendorInfoView.IsActive));
                                        orionElements.notification_Orion.show('Vendor updated');
                                    }
                                }
                                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Window/UpsertVendor\nAn error occurred... Check the console (F12) for more information!');
                            }
                        });
                    }
                    else {
                        alert('Vendor Code length must be 3-8 characters');
                    }
                }
            }
        },
        reset: function (e) {
            $.each(orionInfoViews.vendorInfoView.inputs, function (index, input) {
                fts.value(input, 'ftsReset');
            });
        }
    },
    userInfoView: {
        inputs: function () {
            return {
                LoginID: orionInputs.textbox_UserLoginID,
                UserGroupID: orionInputs.ddl_UserGroup,
                FirstName: orionInputs.textbox_UserFirstName,
                LastName: orionInputs.textbox_UserLastName,
                Password: orionInputs.textbox_UserPassword,
                Email: orionInputs.textbox_UserEmail,
                WorkPhone: orionInputs.textbox_UserWorkPhone,
                MobilePhone: orionInputs.textbox_UserMobilePhone,
                WorkFax: orionInputs.textbox_UserWorkFax
            };
        },
        load: function () {
            fts.openWindow(orionWindows.window_UserInfo);
            ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);

            $.each(this.inputs(), function (property, input) {
                fts.value(input, !orionGrids.grid_Users.loadedUser ? 'ftsReset' : orionGrids.grid_Users.loadedUser[property]);
            });

            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
        },
        save: function () {
            var userID = !orionGrids.grid_Users.loadedUser ? 0 : orionGrids.grid_Users.loadedUser.ID;
            var vendorID = !orionGrids.grid_Vendors.selectedVendor ? null : orionGrids.grid_Vendors.selectedVendor.ID;

            var requiredFields = {
                LoginID: 'Login ID',
                UserGroupID: 'User Group',
                FirstName: 'First Name',
                LastName: 'Last Name',
                Password: 'Password',
                Email: 'Email'
            };
            var values = {};
            var blankRequiredFields = [];
            var inputs = orionInfoViews.userInfoView.inputs();
            $.each(inputs, function (property, input) {
                var value = fts.value(input);
                values[property] = value;
                var propertyIsRequiredField = false;
                $.each(requiredFields, function (key, value) {
                    if (key === property) {
                        propertyIsRequiredField = true;
                    }
                });

                // validation
                if ((value === null || value === '' || value === undefined)
                    && propertyIsRequiredField) {
                    var text = '\n   ' + requiredFields[property];
                    blankRequiredFields.push(text);
                }
            });
            if (blankRequiredFields.length > 0) {
                var blankFields;
                for (var i = 0; i < blankRequiredFields.length; i++) {
                    blankFields += blankRequiredFields[i];
                }
                alert('The following fields cannot be blank:' + blankFields);
            }
            else {
                ftsConfig.ftsLoadingIndicator.show(ftsConfig.ftsWindow.openedWindows.openedWindow);
                $.ajax({
                    type: 'Post',
                    url: 'Window/UpsertUser',
                    data: {
                        userID: userID,
                        vendorID: vendorID,
                        userGroupID: values.UserGroupID, // hard-coded to Company Travel Administrator for now
                        loginID: values.LoginID,
                        firstName: values.FirstName,
                        lastName: values.LastName,
                        password: values.Password,
                        email: values.Email,
                        workPhone: values.WorkPhone,
                        mobilePhone: values.MobilePhone,
                        workFax: values.WorkFax
                    },
                    success: function (upsertedUser) {
                        if (upsertedUser.LoginIDAlreadyExists) {
                            alert('That Login ID is already in use. Please choose a new Login ID and try again. (No changes have been saved)');
                            ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                        }
                        else {
                            var vendorUsersGrid = fts.getWidgetByRoot(orionGrids.grid_Users);
                            var lastSuccessfulLogin = null;
                            if (upsertedUser.LastSuccessfulLogin !== null && upsertedUser.LastSuccessfulLogin !== undefined) {
                                lastSuccessfulLogin = new Date(parseInt(upsertedUser.LastSuccessfulLogin.substr(6)));
                            }
                            // If a new project was inserted
                            if (userID === 0) {
                                vendorUsersGrid.dataSource.add({
                                    ID: upsertedUser.ID,
                                    VendorID: upsertedUser.VendorID,
                                    VendorName: upsertedUser.VendorName,
                                    LoginID: upsertedUser.LoginID,
                                    Password: upsertedUser.Password,
                                    FirstName: upsertedUser.FirstName,
                                    LastName: upsertedUser.LastName,
                                    WorkPhone: upsertedUser.WorkPhone,
                                    MobilePhone: upsertedUser.MobilePhone,
                                    WorkFax: upsertedUser.WorkFax,
                                    Email: upsertedUser.Email,
                                    IsActive: upsertedUser.IsActive,
                                    LastSuccessfulLogin: lastSuccessfulLogin,
                                    UserGroupID: upsertedUser.UserGroupID,
                                    UserGroupName: upsertedUser.UserGroupName
                                });

                                //TODO: should this be moved to a shared library or is this even possible with different ID's?
                                //Select newly created row 
                                var rows = vendorUsersGrid.items();
                                for (var i = 0; i < rows.length; i++) {
                                    var row = rows[i];
                                    var row_dataItem = vendorUsersGrid.dataItem(row);
                                    if (row_dataItem.ID === upsertedUser.ID) {
                                        vendorUsersGrid.select(row);
                                        break;
                                    }
                                }
                                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                                orionElements.notification_Orion.show('User created');
                            }
                            else {
                                if (upsertedUser.IsActive === false) {
                                    vendorUsersGrid.removeRow(fts.rowOfClickedButton);
                                    fts.rowOfClickedButton = null;
                                    vendorUsersGrid.dataSource.data([]);
                                }
                                // If User remains active
                                else {
                                    var gridRow = fts.getGridRowsByKeyValue(fts.getID(orionGrids.grid_Users), 'ID', upsertedUser.ID);
                                    gridRow.set('ID', upsertedUser.ID);
                                    gridRow.set('LoginID', upsertedUser.LoginID);
                                    gridRow.set('UserGroupName', upsertedUser.UserGroupName);
                                    gridRow.set('UserGroupID', upsertedUser.UserGroupID);
                                    gridRow.set('FirstName', upsertedUser.FirstName);
                                    gridRow.set('LastName', upsertedUser.LastName);
                                    gridRow.set('Email', upsertedUser.Email);
                                    gridRow.set('LastSuccessfulLogin', lastSuccessfulLogin);
                                    gridRow.set('IsActive', upsertedUser.IsActive);
                                }
                                orionElements.notification_Orion.show('User updated');
                                ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Window/UpsertUser\nAn error occurred... Check the console (F12) for more information!');
                        ftsConfig.ftsLoadingIndicator.hide(ftsConfig.ftsWindow.openedWindows.openedWindow);
                    }
                });
            }
        },
        reset: function () {
            $.each(orionInfoViews.userInfoView.inputs, function (index, input) {
                fts.value(input, 'ftsReset');
            });
        }
    },
    travelRequestInfoView: {
        inputs: {
            join: function () {
                var inputs = {
                    ProcessingStatusTypeName: orionInputs.textbox_JoinRequestStatus,
                    ArrivalDate: orionInputs.datepicker_JoinArrivalDate,
                    DepartureAirportID: orionInputs.ddl_JoinDepartureAirport,
                    ArrivalAirportID: orionInputs.ddl_JoinArrivalAirport,

                    RequestNotes: orionInputs.textarea_JoinAirNotes,

                    ProcessingStatusNotes: orionInputs.textarea_JoinTravelCoordinatorNotes,

                    HotelReviewStatusTypeID: orionInputs.ddl_JoinHotelReviewStatus,
                    HotelLocationTypeID: orionInputs.radiogroup_JoinHotelLocation,
                    HotelCheckinDate: orionInputs.datepicker_JoinHotelCheckinDate,
                    HotelCheckinNotes: orionInputs.textarea_JoinHotelCheckinNotes,
                    HotelCheckoutDate: orionInputs.datepicker_JoinHotelCheckoutDate,
                    HotelCheckoutNotes: orionInputs.textarea_JoinHotelCheckoutNotes,
                    HotelRoomingPartnerID: orionInputs.ddl_JoinRoomingPartner,
                    HotelRoomingTypeID: orionInputs.ddl_JoinRoomingType,

                    OnboardRoomingPartnerID: orionInputs.ddl_JoinOnboardRoomingPartner,
                    OnboardRoomingTypeID: orionInputs.ddl_JoinOnboardRoomingType
                };
                return inputs;
            },
            leave: function () {
                var inputs = {
                    ProcessingStatusTypeName: orionInputs.textbox_LeaveRequestStatus,
                    DepartureDate: orionInputs.datepicker_LeaveDepartureDate,
                    DepartureRequestedTimeRangeID: orionInputs.radiogroup_LeaveTimeRange,
                    DepartureAirportID: orionInputs.ddl_LeaveDepartureAirport,
                    ArrivalAirportID: orionInputs.ddl_LeaveArrivalAirport,

                    RequestNotes: orionInputs.textarea_LeaveAirNotes,

                    ProcessingStatusNotes: orionInputs.textarea_LeaveTravelCoordinatorNotes,

                    HotelReviewStatusTypeID: orionInputs.ddl_LeaveHotelReviewStatus,
                    HotelLocationTypeID: orionInputs.radiogroup_LeaveHotelLocation,
                    HotelCheckinDate: orionInputs.datepicker_LeaveHotelCheckinDate,
                    HotelCheckinNotes: orionInputs.textarea_LeaveHotelCheckinNotes,
                    HotelCheckoutDate: orionInputs.datepicker_LeaveHotelCheckoutDate,
                    HotelCheckoutNotes: orionInputs.textarea_LeaveHotelCheckoutNotes,
                    HotelRoomingPartnerID: orionInputs.ddl_LeaveRoomingPartner,
                    HotelRoomingTypeID: orionInputs.ddl_LeaveRoomingType
                };
                return inputs;
            }
        },
        load: function () {
            orionInfoViews.travelRequestInfoView.reset();
            var activeTab = $('#tabstrip_EmployeeProjectAssignmentWindow .k-content.k-state-active');
            ftsConfig.ftsLoadingIndicator.show(activeTab);

            fts.getWidgetByRoot(orionInputs.ddl_JoinTransfers).dataSource.read();
            fts.getWidgetByRoot(orionInputs.ddl_LeaveTransfers).dataSource.read();
            orionInfoViews.travelRequestInfoView.transferRequests.disableInputs('J', true);
            orionInfoViews.travelRequestInfoView.transferRequests.disableInputs('L', true);
            
            $.ajax({
                type: 'GET',
                url: 'Window/GetTravelRequestInfo',
                data: {
                    employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID
                },
                success: function (travelRequests) {

                    //TODO: Make travel arrangements ddl's not hard-coded
                    fts.value(orionInputs.ddl_LeaveTravelArrangements, '2');
                    fts.value(orionInputs.ddl_JoinTravelArrangements, '2');
                    fts.disableAnInput(orionInputs.ddl_LeaveTravelArrangements, true);
                    fts.disableAnInput(orionInputs.ddl_JoinTravelArrangements, true);

                    $.each(travelRequests, function (index, request) {
                        var travelDirection = request.TravelDirection === 'J' ? 'join' : 'leave';
                        orionInfoViews.travelRequestInfoView.requestsBeingEdited[travelDirection] = request;
                        var inputs = orionInfoViews.travelRequestInfoView.inputs[travelDirection]();
                        $.each(inputs, function (fieldName, inputRoot) {
                            var value;
                            if (fieldName === 'HotelReviewStatusTypeID') {
                                console.log('HotelReviewStatusTypeID');
                            }
                            var requestField = request[fieldName];
                            if (fieldName === 'HotelReviewStatusTypeID') {
                                var valueIsNull = fts.isNull(requestField);
                                var valueIsZero = requestField === 0;
                                value = valueIsNull || valueIsZero ? 1 : requestField;
                                orionInfoViews.travelRequestInfoView.requestsBeingEdited[travelDirection][fieldName] = value;
                            }
                            else {
                                value = fts.isNull(requestField) ? 'ftsReset' : requestField;
                            }
                            fts.value(inputRoot, value);
                        });
                    });

                    ftsConfig.ftsLoadingIndicator.hide(orionElements.tabstrip_EmployeeProjectAssignmentWindow.activeTab());
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/GetTravelRequestInfo\nAn error occurred... Check the console (F12) for more information!');
                    ftsConfig.ftsLoadingIndicator.hide(orionElements.tabstrip_EmployeeProjectAssignmentWindow.activeTab());
                }
            });
        },
        disableButtons: function (travelDirection, processingStatusTypeID) {
            var pane = travelDirection === 'J' ? '#pane_JoinTravelRequest' : '#pane_LeaveTravelRequest';
            var buttons = $(pane + ' > div.ftsWrapper > div.ftsToolbar > .ftsButton');
            var disabled = processingStatusTypeID === orionStaticValues.airTravel.processingStatusTypes.WaitingSubmitApproval.id;

            $.each(buttons, function (index, button) {
                fts.disableAnInput(orionButtons[button.id], disabled);
            });
        },
        save: function (travelDirection) {
            var dataObject = {
                RequestID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment[travelDirection === 'join' ? 'JoinRequestID' : 'LeaveRequestID'],
                EmployeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID,
                TravelDirection: travelDirection === 'join' ? 'J' : 'L',
                DepartureAirportID: null,
                DepartureDate: null,
                DepartureRequestedTimeRangeID: null,
                ArrivalAirportID: null,
                ArrivalDate: null,
                RequestNotes: null,
                ProcessingStatusTypeID: null,
                ProcessingStatusNotes: null,
                HotelReviewStatusTypeID: null,
                HotelLocationTypeID: null,
                HotelCheckinDate: null,
                HotelCheckinNotes: null,
                HotelCheckoutDate: null,
                HotelCheckoutNotes: null,
                HotelRoomingTypeID: null,
                HotelRoomingPartnerID: null,
                OnboardRoomingTypeID: null,
                OnboardRoomingPartnerID: null
            };
            var inputs;
            if (travelDirection === 'join') {
                inputs = orionInfoViews.travelRequestInfoView.inputs.join();
            }
            else {
                inputs = orionInfoViews.travelRequestInfoView.inputs.leave();
            }
            $.each(inputs, function (fieldName, inputRoot) {
                if (fieldName === 'ProcessingStatusTypeName') {
                    $.each(orionStaticValues.airTravel.processingStatusTypes, function (statusType, values) {
                        if (values.name === fts.value(inputRoot)) {
                            dataObject.ProcessingStatusTypeID = values.id;
                        }
                    });
                }
                else {
                    var inputValue = fts.value(inputRoot);
                    dataObject[fieldName] = inputValue;   
                }
            });

            // validations
            var validationFailText = [];
            if (dataObject.DepartureAirportID !== null && dataObject.ArrivalAirportID !== null) {
                if (dataObject.DepartureAirportID === dataObject.ArrivalAirportID) {
                    validationFailText.push('Arrival Airport must be different than Departure Airport');
                }
            }
            var arriveDate = fts.value(orionInputs.datepicker_JoinArrivalDate);
            var departDate = fts.value(orionInputs.datepicker_LeaveDepartureDate);
            if (arriveDate !== null && departDate !== null) {
                var arriveDate_converted = new Date(arriveDate);
                var departDate_converted = new Date(departDate);
                if (arriveDate_converted > departDate_converted) {
                    validationFailText.push('LEAVE Departure Date cannot be earlier than JOIN Arrival Date');
                } 
                //if (orionGrids.grid_Projects.selectedProject.StartDate >= arrivalDate) {
                //    validationFailText.push('Arrival date must be on or before Project Start Date (' + orionGrids.grid_Projects.selectedProject.StartDate + ')');
                //}
                //if (departureDate >= orionGrids.grid_Projects.selectedProject.EndDate) {
                //    validationFailText.push('Departure date must be on or before Project End Date (' + orionGrids.grid_Projects.selectedProject.EndDate + ')');
                //}
            }
            if (validationFailText.length > 0) {
                var alertText = '';
                $.each(validationFailText, function (index, value) {
                    var newValue = index === validationFailText.length - 1
                        ? value
                        : value + '/n';
                    alertText += newValue;
                });
                alert(alertText);
            }
            else {
                $.ajax({
                    type: 'POST',
                    data: dataObject,
                    url: 'Window/UpsertRequest',
                    success: function (request) {
                        var travelDirection = request.TravelDirection === 'J' ? 'join' : 'leave';
                        orionInfoViews.travelRequestInfoView.requestsBeingEdited[travelDirection] = request;
                        orionElements.notification_Orion.show('Request updated');
                        orionInfoViews.travelGridsView.refreshTravelGrids();
                        var statusTextBox = request.TravelDirection === 'J'
                            ? orionInputs.textbox_JoinRequestStatus
                            : orionInputs.textbox_LeaveRequestStatus;
                        fts.value(statusTextBox, request.ProcessingStatusTypeName);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Window/UpsertRequest\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            }
        },
        submit: function (travelDirection) {
            var requestID = orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment[travelDirection === 'join' ? 'JoinRequestID' : 'LeaveRequestID'];
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID
                },
                url: 'Window/SubmitRequest',
                success: function (request) {
                    var travelDirection = request.TravelDirection === 'J' ? 'join' : 'leave';
                    orionInfoViews.travelRequestInfoView.requestsBeingEdited[travelDirection] = request;
                    orionElements.notification_Orion.show('Request updated');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                    var statusTextBox = request.TravelDirection === orionStaticValues.travelDirections.Join
                        ? orionInputs.textbox_JoinRequestStatus
                        : orionInputs.textbox_LeaveRequestStatus;
                    fts.value(statusTextBox, request.ProcessingStatusTypeName);
                    orionInfoViews.travelRequestInfoView.disableButtons(request.TravelDirection, request.ProcessingStatusTypeID);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/SubmitRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        cancel: function (travelDirection) {
            var requestIDField = travelDirection === 'join' ? 'JoinRequestID' : 'LeaveRequestID';
            var requestID = orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment[requestIDField];
            $.ajax({
                type: 'POST',
                data: {
                    requestID: requestID
                },
                url: 'Window/SubmitCancellationRequest',
                success: function (request) {
                    var travelDirection = request.TravelDirection === 'J' ? 'join' : 'leave';
                    orionInfoViews.travelRequestInfoView.requestsBeingEdited[travelDirection] = request;
                    orionElements.notification_Orion.show('Request updated');
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                    var statusTextBox = request.TravelDirection === orionStaticValues.travelDirections.Join
                        ? orionInputs.textbox_JoinRequestStatus
                        : orionInputs.textbox_LeaveRequestStatus;
                    fts.value(statusTextBox, request.ProcessingStatusTypeName);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Window/SubmitCancellationRequest\nAn error occurred... Check the console (F12) for more information!');
                }
            });
        },
        requestsBeingEdited: {
            join: {},
            leave: {}
        },
        reset: function () {
            $.each(['join', 'leave'], function (key, value) {
                var inputs = orionInfoViews.travelRequestInfoView.inputs[value]();
                $.each(inputs, function (index, input) {
                    fts.value(input, 'ftsReset');
                    orionInfoViews.travelRequestInfoView.transferRequests.resetInputs(value === 'join' ? 'J' : 'L');
                });
            });
            orionInfoViews.travelRequestInfoView.requestsBeingEdited.join = {};
            orionInfoViews.travelRequestInfoView.requestsBeingEdited.leave = {};
            ftsConfig.ftsWindow.removeTitlebarText();
            ftsConfig.ftsTogglePanel.collapseTogglePanels(fts.getID(orionWindows.window_EmployeeProjectAssignment));            
        },
        transferRequests: {
            inputs: function (travelDirection) {
                var isJoin = travelDirection === 'J';
                return {
                    TransferRequestID: isJoin ? orionInputs.ddl_JoinTransfers : orionInputs.ddl_LeaveTransfers,
                    TransferReviewStatusTypeID: isJoin ? orionInputs.ddl_JoinTransferStatus : orionInputs.ddl_LeaveTransferStatus,
                    TransitTypeID: isJoin ? orionInputs.radiogroup_JoinTransfers : orionInputs.radiogroup_LeaveTransfers,
                    TransferRequestNotes: isJoin ? orionInputs.textarea_JoinTransferNotes : orionInputs.textarea_LeaveTransferNotes
                };
            },
            load: function (travelDirection) {
                var ddl = travelDirection === 'J' ? orionInputs.ddl_JoinTransfers : orionInputs.ddl_LeaveTransfers;
                var transferRequestID = fts.value(ddl);
                $.ajax({
                    type: 'Get',
                    url: 'DropDownList/GetTransferRequestByID',
                    data: {
                        transferRequestID: transferRequestID
                    },
                    success: function (request) {
                        var joinOrLeave = request.TravelDirection === 'J' ? 'join' : 'leave';
                        orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited[joinOrLeave] = request;
                        var travelDirection = request.TravelDirection === 'J' ? 'Join' : 'Leave';
                        fts.value(orionInputs['ddl_' + travelDirection + 'TransferStatus'], request.ProcessingStatusTypeID);
                        fts.value(orionInputs['radiogroup_' + travelDirection + 'Transfers'], request.TransitTypeID);
                        fts.value(orionInputs['textarea_' + travelDirection + 'TransferNotes'], request.RequestNotes);
                        //var statusDDL = orionInputs['ddl_' + travelDirection + 'TransferStatus'];
                        //var transitRadioGroup = orionInputs['radiogroup_' + travelDirection + 'Transfers'];
                        //var notesTextArea = orionInputs['textarea_' + travelDirection + 'TransferNotes'];
                        //var statusDDL = request.TravelDirection === 'J' ? orionInputs.ddl_JoinTransferStatus : orionInputs.ddl_LeaveTransferStatus;
                        //var transitRadioGroup = request.TravelDirection === 'J' ? orionInputs.radiogroup_JoinTransfers : orionInputs.radiogroup_LeaveTransfers;
                        //var notesTextArea = request.TravelDirection === 'J' ? orionInputs.textarea_JoinTransferNotes : orionInputs.textarea_LeaveTransferNotes;
                        //fts.value(statusDDL, request.ProcessingStatusTypeID);
                        //fts.value(transitRadioGroup, request.TransitTypeID);
                        //fts.value(notesTextArea, request.RequestNotes);
                        orionInfoViews.travelRequestInfoView.transferRequests.disableInputs(request.TravelDirection, true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('DropDownList/GetTransferRequestByID\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            },
            save: function (travelDirection) {
                var item = orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited[travelDirection === 'J' ? 'join' : 'leave'];
                item.TransitTypeID = fts.value(travelDirection === 'J' ? orionInputs.radiogroup_JoinTransfers : orionInputs.radiogroup_LeaveTransfers);
                item.TransferReviewStatusTypeID = fts.value(travelDirection === 'J' ? orionInputs.ddl_JoinTransferStatus : orionInputs.ddl_LeaveTransferStatus);
                item.TransferRequestNotes = fts.value(travelDirection === 'J' ? orionInputs.textarea_JoinTransferNotes : orionInputs.textarea_LeaveTransferNotes);

                $.ajax({
                    type: 'POST',
                    data: {
                        TransferRequestID: item.TransferRequestID,
                        TransferReviewStatusTypeID: item.TransferReviewStatusTypeID,
                        TransitTypeID: item.TransitTypeID,
                        TransferRequestNotes: item.TransferRequestNotes,
                        TravelDirection: item.TravelDirection,
                        EmployeeProjectAssignmentID: item.EmployeeProjectAssignmentID,
                        IsActive: item.IsActive
                    },
                    url: 'Window/UpsertTransferRequest',
                    success: function (transferRequest) {
                        orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited[transferRequest.TravelDirection === 'J' ? 'join' : 'leave'] = transferRequest;
                        var notificationText = transferRequest.IsActive ? 'Transfer Request saved' : 'Transfer Request deleted';
                        orionInfoViews.travelRequestInfoView.transferRequests.reset(transferRequest.TravelDirection, notificationText);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Window/UpsertTransferRequest\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            },
            deleteTransferRequest: function (travelDirection) {
                var ddl = travelDirection === 'J' ? orionInputs.ddl_JoinTransfers : orionInputs.ddl_LeaveTransfers;
                var transferRequestID = fts.value(ddl);
                orionInfoViews.travelRequestInfoView.transferRequests.travelDirectionOfRequestBeingDeleted = travelDirection;
                $.ajax({
                    type: 'POST',
                    data: {
                        TransferRequestID: transferRequestID
                    },
                    url: 'Window/DeleteTransferRequest',
                    success: function (transferRequest) {
                        orionInfoViews.travelRequestInfoView.transferRequests.requestsBeingEdited = null;
                        var notificationText = 'Transfer Request deleted';
                        orionInfoViews.travelRequestInfoView.transferRequests.reset(orionInfoViews.travelRequestInfoView.transferRequests.travelDirectionOfRequestBeingDeleted, notificationText);
                        orionInfoViews.travelRequestInfoView.transferRequests.travelDirectionOfRequestBeingDeleted = null;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Window/UpsertTransferRequest\nAn error occurred... Check the console (F12) for more information!');
                    }
                });
            },
            travelDirectionOfRequestBeingDeleted: null,
            requestsBeingEdited: {
                join: {},
                leave: {}
            },
            disableInputs: function (travelDirection, value) {
                console.log('orionInfoViews.travelRequestInfoView.transferRequests.disableInputs');
                var isDisabled = value === true;

                // disable radio buttons
                var radioGroupIdTag = travelDirection === 'J' ? '#radiogroup_JoinTransfers' : '#radiogroup_LeaveTransfers';
                var radioButtons = $(radioGroupIdTag + ' input.ftsRadioButton');
                $.each(radioButtons, function (index, button) {
                    fts.disableAnInput(orionInputs[button.id], isDisabled);
                });

                // disable transfer notes
                var notesTextarea = travelDirection === 'J' ? orionInputs.textarea_JoinTransferNotes : orionInputs.textarea_LeaveTransferNotes;
                fts.disableAnInput(notesTextarea, isDisabled);

                // disable status ddl
                var statusDDL = travelDirection === 'J' ? orionInputs.ddl_JoinTransferStatus : orionInputs.ddl_LeaveTransferStatus;
                fts.disableAnInput(statusDDL, isDisabled);
            },
            reset: function (travelDirection, notificationText) {
                if (notificationText !== 'Transfer Request deleted') {
                    var toolbar = travelDirection === 'J' ? orionElements.toolbar_JoinTransfers : orionElements.toolbar_LeaveTransfers;
                    toolbar.toggle();
                }
                orionInfoViews.travelRequestInfoView.transferRequests.resetInputs(travelDirection);
                orionInfoViews.travelRequestInfoView.transferRequests.disableInputs(travelDirection, true);
                var ddl = fts.getWidgetByRoot(travelDirection === 'J' ? orionInputs.ddl_JoinTransfers : orionInputs.ddl_LeaveTransfers);
                ddl.dataSource.read();
                orionElements.notification_Orion.show(notificationText);
            },
            resetInputs: function (travelDirection) {
                fts.value(travelDirection === 'J' ? orionInputs.ddl_JoinTransferStatus : orionInputs.ddl_LeaveTransferStatus, 'ftsReset');
                fts.value(travelDirection === 'J' ? orionInputs.radiogroup_JoinTransfers : orionInputs.radiogroup_LeaveTransfers, 'ftsReset');
                fts.value(travelDirection === 'J' ? orionInputs.textarea_JoinTransferNotes : orionInputs.textarea_LeaveTransferNotes, 'ftsReset');
            }
        }
    },
    flightInfoView: {
        inputs: {},
        load: function () {
            fts.getWidgetByRoot(orionGrids.grid_JoinFlightLegs).dataSource.read();
            fts.getWidgetByRoot(orionGrids.grid_LeaveFlightLegs).dataSource.read();
        },
        save: function () {
        },
        loadFlightLegs: function () {
            //TODO: For each flight leg, add a row to the corresponding Join/Leave table
            var joinTable = $('#flightInfoWrapper .ftsSplitpanel > .ftsSplitpanel__pane:first-of-type .ftsTable--data');
            var leaveTable = $('#flightInfoWrapper .ftsSplitpanel > .ftsSplitpanel__pane:last-of-type .ftsTable--data');
            if (orionInfoViews.loadedFlightLegs_Join.length > 0) {
                for (var i = 0; i < orionInfoViews.loadedFlightLegs_Join.length; i++) {
                    var joinFlightLeg = loadedFlightsLegs_Join[i];
                    // get props: DepartureDateTime, AirlineCode, DepartureAirportID
                    var joinRow =
                        '<tr class="ftsTable__row--data"><br /><td><br />' +
                        joinFlightLeg.DepartureDate +
                        '<br /></td><br /><td><br />' +
                        joinFlightLeg.FlightNumber +
                        '<br /></td><br /><td><br />' +
                        joinFlightLeg.DepartureAirportCode +
                        '<br /></td><br /></tr><br />';
                    $(joinTable).append(joinRow);
                }
            }
            if (loadedFlightLegs_Leave.length > 0) {
                for (var n = 0; n < loadedFlightLegs_Leave.length; n++) {
                    var leaveFlightLeg = loadedFlightLegs_Leave[n];
                    // get props: DepartureDateTime, AirlineCode, DepartureAirportID
                    var leaveRow =
                        '<tr><br />' +
                        '    <td><br />' +
                        '        ' + leaveFlightLeg.DepartureDate + '< br />' +
                        '    </td><br />' +
                        '    <td><br />' +
                        '        ' + leaveFlightLeg.FlightNumber + '<br />' +
                        '    </td><br />' +
                        '    <td><br />' +
                        '        ' + leaveFlightLeg.DepartureAirportCode + '<br />' +
                        '    </td><br />' +
                        '</tr><br />';
                    $(leaveTable).append(leaveRow);
                }
            }
        },
        loadedFlightLegs_Join: function () {

        },
        loadedFlightLegs_Leave: function () {

        }
    }
};

var orionGrids = {
    grid_AllPendingRequests: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            fts.setGridBadge(fts.getID(orionGrids.grid_AllPendingRequests));
            this.resize();
        },
        onDataBinding: function (e) {
        }
    },
    grid_EmployeeProjectAssignments: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
            //$.each(gridRows, function (index, row) {
            //    grid.removeRow(row);
            //});
            orionInputs.multiselect_AssignEmployeesToProject.reset();
        },
        refresh: function () {
            fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments).dataSource.read();
        },
        data: function (e) {
            var vendorID = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionSessionVariables.VendorID
                : orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment.VendorID;
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID,
                vendorID: vendorID
            };
        },
        resize: function (e) {
            console.log('orionGrids.grid_EmployeeProjectAssignments.resize');
            var gridHeader = $('#grid_EmployeeProjectAssignments > div.k-grid-header');
            var gridContent = $('#grid_EmployeeProjectAssignments > div.k-grid-content');
            var headerHeight = fts.getOuterHeight(gridHeader);
            gridContent.css('height', 'calc(100% - ' + headerHeight + 'px');
        },
        destroy: function (e) {
            var grid = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments);
            var selectedRow = grid.select();
            var selectedRow_dataItem = grid.dataItem(selectedRow);
            return {
                projectID: selectedRow_dataItem.ProjectID,
                employeeID: selectedRow_dataItem.ID
            };
        },
        onDataBinding: function (e) {
        },
        onDataBound: function (e) {
            console.log('orionGrids.grid_EmployeeProjectAssignments.onDataBound');
            orionGrids.grid_EmployeeProjectAssignments.resize();
        },
        show: function () {
            console.log('orionGrids.grid_EmployeeProjectAssignments.show');
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            console.log('orionGrids.grid_EmployeeProjectAssignments.hide');
            fts.getElement(this).fadeOut();
        },
        loadedEmployeeProjectAssignment: null
    },
    grid_PendingCoordinatorReview: {
        //config: {
        //    url: 'Grid/Grid_PendingCoordinatorReview_Read',
        //    model: orionStaticValues.viewModels.TravelRequest,
        //    fileName: 'VTM Export - Pending Coordinator Review',
        //    columns: [
        //        {
        //            command: [
        //                { name: 'Edit', click: orionWindows.window_EmployeeProjectAssignment.gridEditButtonClick },
        //                { name: 'Approve', click: orionButtons.btn_ApproveRequestPendingReview.onClick },
        //                { name: 'Reject', click: orionButtons.btn_RejectRequestPendingReview.onClick }
        //            ],
        //            width: '120px'
        //        },
        //        { field: 'ProcessingStatusTypeName', title: 'Status' },
        //        { field: 'LastName', title: 'Last Name' },
        //        { field: 'FirstName', title: 'First Name' },
        //        { field: 'ProjectName', title: 'Project' },
        //        { field: 'TravelDirection', title: 'Direction' },
        //        { field: 'ArrivalDate', title: 'Arrival Date' },
        //        { field: 'DepartureDate', title: 'Departure Date' }
        //    ]
        //},
        //build: function () {
        //    fts.getElement(this).kendoGrid({
        //        dataSource: {
        //            transport: {
        //                read: {
        //                    url: 'Grid/Grid_PendingCoordinatorReview_Read',
        //                    data: this.data
        //                }
        //            },
        //            schema: {
        //                type: "json",
        //                model: orionStaticValues.viewModels.TravelRequest,
        //                parse: fts.parseGridData
        //            }
        //        },
        //        sortable: true,
        //        persistSelection: true,
        //        scrollable: true,
        //        filterable: true,
        //        resizable: true,
        //        autoBind: false,
        //        columnMenu: true,
        //        dataBound: this.onDataBound,
        //        excel: {
        //            fileName: 'VTM Export - Pending Coordinator Review',
        //            filterable: true,
        //            allPages: true
        //        },
        //        columns: [
        //            {
        //                command: [
        //                    { name: 'Edit', click: orionWindows.window_EmployeeProjectAssignment.gridEditButtonClick },
        //                    { name: 'Approve', click: orionButtons.btn_ApproveRequestPendingReview.onClick },
        //                    { name: 'Reject', click: orionButtons.btn_RejectRequestPendingReview.onClick }
        //                ],
        //                width: '120px'
        //            },
        //            { field: 'ProcessingStatusTypeName', title: 'Status' },
        //            { field: 'LastName', title: 'Last Name' },
        //            { field: 'FirstName', title: 'First Name' },
        //            { field: 'ProjectName', title: 'Project' },
        //            { field: 'TravelDirection', title: 'Direction' },
        //            { field: 'ArrivalDate', title: 'Arrival Date' },
        //            { field: 'DepartureDate', title: 'Departure Date' }
        //        ]
        //    });
        //},
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            fts.setGridBadge(fts.getID(orionGrids.grid_PendingCoordinatorReview));
            // highlight 'Cancellation Request Submitted' rows in red
            var grid = fts.getWidgetByRoot(orionGrids.grid_PendingCoordinatorReview);
            var rows = grid.tbody.find("tr");
            var dataItems = grid.items();
            $.each(rows, function (index, row) {
                var dataItem = grid.dataItem(row);
                if (dataItem.ProcessingStatusTypeID === orionStaticValues.airTravel.processingStatusTypes.WaitingCancellationApproval.id) {
                    $(row).addClass('ftsGrid__gridRow--red');
                }
            });
            orionGrids.grid_PendingCoordinatorReview.resize();
        }
    },
    grid_PendingLodgingRequests: {
        //config: {
        //    url: 'Grid/Grid_PendingLodgingRequests_Read',
        //    model: 'LodgingRequest',
        //    fileName: 'VTM Export - Pending Lodging Requests',
        //    columns: [
        //        {
        //            command: [
        //                { name: 'Edit', click: orionWindows.window_EmployeeProjectAssignment.gridEditButtonClick }
        //            ],
        //            width: '84px'
        //        },
        //        { field: 'LastName', title: 'Last Name' },
        //        { field: 'FirstName', title: 'First Name' },
        //        { field: 'ReviewStatusTypeName', title: 'Review Status' },
        //        { field: 'TravelDirection', title: 'Join/Leave' },
        //        { field: 'LocationTypeName', title: 'Location Type' },
        //        { field: 'RoomingTypeName', title: 'Rooming Type' }
        //    ]
        //},
        build: function () {
            fts.getElement(this).kendoGrid({
                dataSource: {
                    transport: {
                        read: {
                            url: 'Grid/Grid_PendingLodgingRequests_Read',
                            data: this.data
                        }
                    },
                    schema: {
                        type: "json",
                        model: orionStaticValues.viewModels.LodgingRequest,
                        parse: fts.parseGridData
                    }
                },
                sortable: true,
                persistSelection: true,
                scrollable: true,
                filterable: true,
                resizable: true,
                autoBind: false,
                columnMenu: true,
                //detailTemplate: kendo.template($("#template_PendingLodgingRequests").html()),
                //detailInit: this.detailInit,
                dataBound: this.onDataBound,
                excel: {
                    fileName: 'VTM Export - Pending Lodging Requests',
                    filterable: true,
                    allPages: true
                },
                columns: [
                    {
                        command: [
                            { name: 'Edit', click: orionWindows.window_EmployeeProjectAssignment.gridEditButtonClick }
                        ],
                        width: '84px'
                    },
                    { field: 'LastName', title: 'Last Name' },
                    { field: 'FirstName', title: 'First Name' },
                    { field: 'ReviewStatusTypeName', title: 'Review Status' },
                    { field: 'TravelDirection', title: 'Join/Leave' },
                    { field: 'LocationTypeName', title: 'Location Type' },
                    { field: 'RoomingTypeName', title: 'Rooming Type' }
                ]
            });
        },
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        detailInit: function (e) {
            var detailRow = e.detailRow;
            detailRow.find("#tabstrip_LodgingTemplate").kendoTabStrip({
                animation: {
                    open: { effects: "fadeIn" }
                }
            });
        },
        onDataBound: function (e) {
            fts.setGridBadge(fts.getID(orionGrids.grid_PendingLodgingRequests));
            orionGrids.grid_PendingLodgingRequests.resize();
        },
        approveLodgingRequest: function (e) {
            var clickedRow = fts.getGridRowOfClickedButton(e);
        }
    },
    grid_PendingTransferRequests: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            fts.setGridBadge(fts.getID(orionGrids.grid_PendingTransferRequests));
            orionGrids.grid_PendingTransferRequests.resize();
        },
        approveTransferRequest: function (e) {
            var clickedRow = fts.getGridRowOfClickedButton(e);
        }
    },
    grid_PendingFlightRequests: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            fts.setGridBadge(fts.getID(orionGrids.grid_PendingFlightRequests));
            orionGrids.grid_PendingFlightRequests.resize();
        }
    },
    grid_Projects: {
        data: function (e) {
            var slider = $('#toggleselector_Navbar');
            var projectTypeID = slider.val();
            return {
                projectTypeID: projectTypeID
            };
        },
        reset: function () {
            fts.getWidgetByRoot(orionGrids.grid_Projects).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
            var grid = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionGrids.grid_EmployeeProjectAssignments
                : orionGrids.grid_VendorProjectAssignments;
            grid.reset();
        },
        resize: function (e) {
            var id = fts.getID(orionGrids.grid_Projects);
            var gridContent = $('#' + id + ' > div.k-grid-content');
            var height = '32px';
            gridContent.css('height', 'calc(100% - ' + height + ')');
        },
        onChange: function (e) {
            if (orionGrids.grid_Projects.rowClicked) {
                orionGrids.grid_Projects.rowClicked = false;
                var selectedRow = fts.getElement(orionGrids.grid_Projects).find('tr.k-state-selected');
                var selectedRow_dataItem = fts.getWidgetByRoot(orionGrids.grid_Projects).dataItem(selectedRow);
                orionGrids.grid_Projects.selectedProject = selectedRow_dataItem;
                fts.togglePrimaryPanels();

                if (orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator) {
                    setTimeout(function () {
                        orionGrids.grid_Projects.resize();
                        orionGrids.grid_EmployeeProjectAssignments.resize();
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        orionGrids.grid_Projects.resize();
                        orionGrids.grid_EmployeeProjectAssignments.resize();
                        orionGrids.grid_VendorProjectAssignments.resize();
                    }, 500);
                    fts.getWidgetByRoot(orionInputs.ddl_ActiveVendors).dataSource.read();
                    orionInfoViews.travelGridsView.refreshTravelGrids();
                }
            }
        },
        rowClicked: false,
        onRowClick: function (e) {
            orionGrids.grid_Projects.rowClicked = true;
        },
        onDataBound: function (e) {
            orionGrids.grid_Projects.resize();
            var projectsGrid = fts.getWidgetByRoot(orionGrids.grid_Projects);
            var rows = projectsGrid.items();
            $.each(rows, function (index, row) {
                row.addEventListener('click', orionGrids.grid_Projects.onRowClick);
                row.addEventListener('contextmenu', orionGrids.grid_Projects.onContextMenu);
            });
        },
        addRow: function (dataItem) {

        },
        removeNonSelectedRows: function () {
            var projectsGrid = fts.getWidgetByRoot(orionGrids.grid_Projects);
            var projectGridRows = fts.getWidgetByRoot(orionGrids.grid_Projects).items();
            var rowsToRemove = [];
            $.each(projectGridRows, function (index, row) {
                if (row.nodeName === 'TR') {
                    var dataRow = projectsGrid.dataItem(row);
                    if (dataRow.ID !== orionGrids.grid_Projects.selectedProject.ID) {
                        rowsToRemove.push(row);
                    }
                }
            });
            $.each(rowsToRemove, function (index, row) {
                projectsGrid.removeRow(row);
            });

        },
        selectedRow: null,
        selectedProject: null,
        loadedProject: null
    },
    grid_TravelRequestOverview: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {

            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            return {
                projectID: orionGrids.grid_Projects.selectedProject.ID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            var totalItems = e.sender.dataSource.total();
            var badge = $('#grid_TravelRequestOverview_Badge');
            if (totalItems > 0) {
                badge.attr('style', 'background-color: red');
                badge.html(totalItems);
            }
            else {
                badge.attr('style', 'background-color: #777777');
                badge.html(0);
            }
            orionGrids.grid_TravelRequestOverview.resize();
        }
    },
    grid_Employees: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function (e) {
            var vendorID = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionSessionVariables.VendorID
                : orionGrids.grid_Vendors.selectedVendor.ID;
            return {
                vendorID: vendorID
            };
        },
        resize: function (e) {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function (e) {
            orionGrids.grid_Employees.resize();
        },
        loadedEmployee: null
    },
    grid_VendorProjectAssignments: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
            orionGrids.grid_EmployeeProjectAssignments.reset();
        },
        data: function (e) {
            var thisProjectID = orionGrids.grid_Projects.selectedProject.ID;
            return {
                projectID: thisProjectID
            };
        },
        resize: function (e) {
            //fts.getElement(orionGrids.grid_VendorProjectAssignments).animate({
            //    height: 'calc(100% - 46px)'
            //});
        },
        onDataBound: function (e) {
            orionGrids.grid_VendorProjectAssignments.resize();
            var vendorProjectAssignmentGrid = fts.getWidgetByRoot(orionGrids.grid_VendorProjectAssignments);
            var gridRows = vendorProjectAssignmentGrid.items();
            if (gridRows.length === 1) {
                var row = gridRows[0];
                vendorProjectAssignmentGrid.select(row);
            }
        },
        onChange: function (e) {
            var vendorProjectAssignmentGrid = fts.getWidgetByRoot(orionGrids.grid_VendorProjectAssignments);
            var selection = vendorProjectAssignmentGrid.select();
            orionGrids.grid_VendorProjectAssignments.selectedVendorProjectAssignment = vendorProjectAssignmentGrid.dataItem(selection);
            fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments).dataSource.read();
            fts.getElement(orionGrids.grid_EmployeeProjectAssignments).fadeIn();
            fts.getWidgetByRoot(orionInputs.multiselect_AssignEmployeesToProject).dataSource.read();
        },
        show: function () {
            fts.getElement(this).fadeIn();
        },
        hide: function () {
            fts.getElement(this).fadeOut();
        },
        selectedRow: null,
        selectedVendorProjectAssignment: null
    },
    grid_Vendors: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        resize: function () {
            fts.resizeGridContent(fts.getID(this));
        },
        onChange: function () {
            var vendorsGrid = fts.getWidgetByRoot(orionGrids.grid_Vendors);
            var selection = vendorsGrid.select();
            if (selection.length > 0) {
                orionGrids.grid_Vendors.selectedVendor = vendorsGrid.dataItem(selection);
                var vendorEmployeesGrid_Element = fts.getElement(orionGrids.grid_Employees);
                var vendorEmployeesGrid_Widget = fts.getWidgetByRoot(orionGrids.grid_Employees);
                var vendorUsersGrid_Element = fts.getElement(orionGrids.grid_Users);
                var vendorUsersGrid_Widget = fts.getWidgetByRoot(orionGrids.grid_Users);
                vendorEmployeesGrid_Element.fadeIn();
                vendorUsersGrid_Element.fadeIn();
                vendorEmployeesGrid_Widget.dataSource.read();
                vendorUsersGrid_Widget.dataSource.read();
            }
            else {
                orionGrids.grid_Vendors.selectedVendor = null;
            }
        },
        onDataBound: function () {
            orionGrids.grid_Vendors.resize();
        },
        selectedRow: null,
        selectedVendor: null,
        loadedVendor: null
    },
    grid_Users: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function () {
            var vendorID = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionSessionVariables.VendorID
                : orionGrids.grid_Vendors.selectedVendor.ID;
            return {
                vendorID: vendorID
            };
        },
        resize: function () {
            fts.resizeGridContent(fts.getID(this));
        },
        onDataBound: function () {
            orionGrids.grid_Users.resize();
        },
        loadedUser: null
    },
    grid_JoinFlightLegs: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function () {
            return {
                employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID
            };
        },
        resize: function () {
            fts.resizeGridContent(fts.getID(this));
        }
    },
    grid_LeaveFlightLegs: {
        reset: function () {
            fts.getWidgetByRoot(this).dataSource.data([]);
        },
        refresh: function () {
            fts.getWidgetByRoot(this).dataSource.read();
        },
        data: function () {
            return {
                employeeProjectAssignmentID: orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.ID
            };
        },
        resize: function () {
            fts.resizeGridContent(fts.getID(this));
        }
    },
    grid_ReportExpiringPassports: {
        data: orionInputs.ddl_ReportProjects.reportsData
    },
    grid_ReportFlights: {
        data: orionInputs.ddl_ReportProjects.reportsData
    },
    grid_ReportHotelRequests: {
        data: orionInputs.ddl_ReportProjects.reportsData
    },
    grid_ReportTransferRequests: {
        data: orionInputs.ddl_ReportProjects.reportsData
    }
};

var orionWindows = {
    window_EmployeeInfo: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 1000,
                height: 500,
                title: 'Employee Info',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
                //minHeight: 570,
                //minWidth: 670
            });
        },
        resetValues: function (e) {
            $.each(orionInfoViews.employeeInfoView.inputs, function (property, input) {
                fts.value(input, 'ftsReset');
            });
        },
        onActivate: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionWindows.window_EmployeeInfo.resetValues();
                fts.resetInputs(orionInfoViews.infoview_Passport.inputs());

                var currentlyEditingVisa = false;
                if ($('#toolbar_EmployeeVisas > div:first-of-type').css('display') === 'none') {
                    currentlyEditingVisa = true;
                }
                if (currentlyEditingVisa) {
                    orionInfoViews.infoview_Visa.disableInputs();
                    orionInfoViews.infoview_Visa.disableInputs();
                    orionElements.toolbar_EmployeeVisas.toggle();
                }

                var currentlyEditingPassport = false;
                if ($('#toolbar_EmployeePassports > div:first-of-type').css('display') === 'none') {
                    currentlyEditingPassport = true;
                }
                if (currentlyEditingPassport) {
                    orionInfoViews.infoview_Passport.disableInputs();
                    orionInfoViews.infoview_Visa.disableInputs();
                    orionElements.toolbar_EmployeePassports.toggle();
                }
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        }
    },
    window_EmployeeProjectAssignment: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 1200,
                height: 550,
                title: 'Employee Project Assignment',
                open: this.onOpen,
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            fts.getWidgetByRoot(orionElements.tabstrip_EmployeeProjectAssignmentWindow).select(2);
            if (orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment !== null) {
                ftsConfig.ftsWindow.addTitlebarText(orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.FullName);
            }
        },
        onOpen: function (e) {
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                var unsavedChangesExist = false;
                $.each(orionInfoViews.travelRequestInfoView.requestsBeingEdited, function (travelDirection, travelRequest) {
                    $.each(orionInfoViews.travelRequestInfoView.inputs[travelDirection](), function (fieldName, inputRoot) {
                        var currentValue = fts.value(inputRoot);
                        var originalValue = fts.isNull(travelRequest[fieldName])
                            ? null
                            : fts.isDateField(fieldName)
                                ? fts.convert.dateToString(travelRequest[fieldName])
                                : travelRequest[fieldName];
                        var currentValueIsNotNullAndIsDifferentFromOriginal = !fts.isNull(currentValue) && currentValue !== originalValue;
                        var currentValueIsNullButOriginalValueIsNotNull = fts.isNull(currentValue) && !fts.isNull(originalValue);
                        if (currentValueIsNotNullAndIsDifferentFromOriginal || currentValueIsNullButOriginalValueIsNotNull) {
                            unsavedChangesExist = true;
                        }
                    });
                });

                var proceedWithClosingWindow = unsavedChangesExist
                    ? confirm('There are unsaved changes. Discard changes and close window?')
                    : true;                
                if (proceedWithClosingWindow) {
                    orionInfoViews.travelRequestInfoView.reset();
                    orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = null;
                    fts.closeWindow();
                }
                else {
                    e.preventDefault();
                }
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        resetValues: function (e) {
            var JoinInputs = fts.getInputsByInfoViewID('infoview_Joinrequest');
            var LeaveInputs = fts.getInputsByInfoViewID('infoview_Leaverequest');
            $.each($.extend({}, JoinInputs, LeaveInputs), function (key, input) {
                fts.value(input, 'ftsReset');
            });
        },
        open: function () {
            fts.openWindow(orionWindows.window_EmployeeProjectAssignment);
            fts.getWidgetByRoot(orionInputs.ddl_JoinRoomingPartner).dataSource.read();
            orionInfoViews.travelRequestInfoView.load();
            orionInfoViews.flightInfoView.load();
        },
        gridEditButtonClick: function (e) {
            var clickedRow = fts.getGridRowOfClickedButton(e);
            var epaGrid = fts.getWidgetByRoot(orionGrids.grid_EmployeeProjectAssignments);
            var rows = epaGrid.items();
            var matchingRow = null;
            $.each(rows, function (index, row) {
                if (matchingRow === null) {
                    var dataItem = epaGrid.dataItem(row);
                    var epaID = dataItem.ID;
                    if (clickedRow.EmployeeProjectAssignmentID === epaID) {
                        matchingRow = dataItem;
                    }
                }
            });
            if (matchingRow === null) {
                console.log('error: Travel Grids "Edit" button clicked, but no matching row found on grid_EmployeeProjectAssignments');
            }
            else {
                orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = matchingRow;
                orionWindows.window_EmployeeProjectAssignment.open();
            }
        }
    },
    window_FlightInfo: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 1200,
                height: 550,
                title: 'Flight Info',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            if (orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment !== null) {
                ftsConfig.ftsWindow.addTitlebarText(orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment.FullName);
            }
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionGrids.grid_EmployeeProjectAssignments.loadedEmployeeProjectAssignment = null;
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        open: function () {
            fts.openWindow(orionWindows.window_FlightInfo);
            orionInfoViews.flightInfoView.load();
        }
    },
    window_PrivacyStatement: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 1000,
                height: 500,
                title: 'Privacy Statement',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                draggable: true,
                resizable: true
            });
        },
        hideCloseButton: function () {
            var windowTitle = $('#window_PrivacyStatement_wnd_title');
            var siblings = windowTitle.siblings();
            var windowActionsDiv = '';
            $.each(siblings, function (index, sibling) {
                if (windowActionsDiv === '') {
                    if ($(sibling).hasClass('k-window-actions')) {
                        windowActionsDiv = sibling;
                    }
                }
            });
            var closeButton = $(windowActionsDiv).find('a.k-button');
            closeButton[0].parentNode.removeChild(closeButton[0]);
        },
        onActivate: function (e) {
            console.log('orionWindows.window_PrivacyStatement.onActivate');
            orionWindows.window_PrivacyStatement.hideCloseButton();
            orionWindows.window_PrivacyStatement.loadGDPRStatement();
        },
        onClose: function (e) {
            console.log('orionWindows.window_PrivacyStatement.onClose');
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            console.log('orionWindows.window_PrivacyStatement.onResize');
            ftsConfig.ftsWindow.resize();
        },
        loadGDPRStatement: function () {
            ftsConfig.ftsLoadingIndicator.show($('#window_PrivacyStatement'));
            $('#window_PrivacyStatement > .ftsContent').css('background-color', 'transparent');
            $.ajax({
                type: 'GET',
                url: 'Settings/GetGDPRStatement',
                success: function (GDPRStatement) {
                    console.log('Settings/GetGDPRStatement --> Success!');
                    var verbiage = GDPRStatement.Verbiage;
                    var div = $('#window_PrivacyStatement > .ftsContent');
                    div.css('background-color', 'white');
                    div.append(verbiage);
                    ftsConfig.ftsLoadingIndicator.hide($('#window_PrivacyStatement'));
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Settings/GetGDPRStatement\nAn error occurred... Check the console (F12) for more information!');
                    ftsConfig.ftsLoadingIndicator.hide($('#window_PrivacyStatement'));
                }
            });
        },
        acceptPrivacyStatement: function () {
            console.log('orionWindows.window_PrivacyStatement.acceptPrivacyStatement');
            $.ajax({
                type: 'POST',
                url: 'Settings/AcceptPrivacyStatement',
                success: function (upsertedUser) {
                    console.log('Settings/AcceptPrivacyStatement --> Success!');
                    var window = fts.getWidgetByRoot(orionWindows.window_PrivacyStatement);
                    window.close();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Settings/AcceptPrivacyStatement\nAn error occurred... Check the console (F12) for more information!');
                    var window = fts.getWidgetByRoot(orionWindows.window_PrivacyStatement);
                    window.close();
                }
            });
        }
    },
    window_ProjectInfo: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 750,
                height: 300,
                title: 'Project Info',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionWindows.window_ProjectInfo.resetValues();
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        resetValues: function (e) {
            $.each(orionInfoViews.projectInfoView.inputs, function (property, input) {
                fts.value(input, 'ftsReset');
            });
        },
        hasBeenOpened: false
    },
    window_Settings: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 800,
                height: 500,
                title: 'Settings',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            ftsConfig.ftsWindow.resize();
            orionInfoViews.infoview_UserGroups.resetCheckboxes();
            fts.value(orionInputs.ddl_SettingsUserGroups, 'ftsReset');
            orionInfoViews.infoview_UserGroups.disableCheckboxes(true);
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionInfoViews.infoview_UserGroups.resetCheckboxes();
                fts.value(orionInputs.ddl_SettingsUserGroups, 'ftsReset');
                orionInfoViews.infoview_UserGroups.disableCheckboxes(true);
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        resetValues: function (e) {
            $.each(orionInfoViews.infoview_Settings.inputs, function (property, input) {
                fts.value(input, 'ftsReset');
            });
        }
    },
    window_UserInfo: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 600,
                height: 400,
                title: 'User Info',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionWindows.window_UserInfo.resetValues();
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        resetValues: function (e) {
            $.each(orionInfoViews.userInfoView.inputs, function (property, input) {
                fts.value(input, 'ftsReset');
            });
        }
    },
    window_VendorInfo: {
        build: function () {
            fts.getElement(this).kendoWindow({
                width: 580,
                height: 300,
                title: 'Vendor Info',
                activate: this.onActivate,
                close: this.onClose,
                resize: this.onResize,
                actions: ['Close'],
                draggable: true,
                resizable: true
            });
        },
        onActivate: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        onClose: function (e) {
            if (!ftsConfig.ftsWindow.ignoreWindowCloseEvent) {
                orionWindows.window_VendorInfo.resetValues();
                fts.closeWindow();
            }
            else {
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = false;
            }
        },
        onResize: function (e) {
            ftsConfig.ftsWindow.resize();
        },
        resetValues: function (e) {
            $.each(orionInfoViews.vendorInfoView.inputs, function (property, input) {
                fts.value(input, 'ftsReset');
            });
        }
    }
};

//#region Page Load
$(document).ready(function () {
    // Load ActionIDs into global js variable 'orionSessionVariables'
    $.ajax({
        type: 'GET',
        data: {
            userGroupID: orionSessionVariables.UserGroupID
        },
        url: 'Settings/GetActionsByUserGroupID',
        success: function (results) {
            $.each(results, function (key, value) {
                if (value.IsActive) {
                    orionSessionVariables.ActionIDs.push(value.ActionID);
                }
            });

            // disable Status DDL's on Travel Request Info (Employee Project Assignment window)
            if (!orionSessionVariables.ActionIDs.includes(orionStaticValues.security.actions.EditLodgingReviewStatus.ID)) {
                fts.disableAnInput(orionInputs.ddl_JoinHotelReviewStatus, true);
                fts.disableAnInput(orionInputs.ddl_LeaveHotelReviewStatus, true);
            }
            if (!orionSessionVariables.ActionIDs.includes(orionStaticValues.security.actions.EditTransferReviewStatus.ID)) {
                fts.disableAnInput(orionInputs.ddl_JoinTransferStatus, true);
                fts.disableAnInput(orionInputs.ddl_LeaveTransferStatus, true);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Settings/GetActionsByUserGroupID\nAn error occurred... Check the console (F12) for more information!');
        }
    });
    
    //#region Polyfill
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    }
    //#endregion

    window.onpopstate = function (e) {
        window.history.forward(1);
    };

    fts.buildSiteElements();
    fts.buildStuff(orionGrids);

    // Check to see if the User needs to accept the GDPR Privacy Statement
    $.ajax({
        type: 'GET',
        url: 'Settings/CheckForPrivacyStatement',
        success: function (userNeedsToAcceptPrivacyStatement) {
            if (userNeedsToAcceptPrivacyStatement) {
                fts.openWindow(orionWindows.window_PrivacyStatement);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Settings/CheckForPrivacyStatement\nAn error occurred... Check the console (F12) for more information!');
        }
    });
});

$(window).load(function () {
    fts.hideloadingWrapper();
    // For Company Travel Administrators, load Employees and Users grids
    if (orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator) {
        fts.getWidgetByRoot(orionGrids.grid_Employees).dataSource.read();
        fts.getWidgetByRoot(orionGrids.grid_Users).dataSource.read();
    }
});
//#endregion