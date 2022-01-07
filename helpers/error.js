var errors = {

//tenants error
// tenant_name_taken: [400,"Tenant name already taken"],
400: "Tenant Name already taken",

//server error
// server_error: [500, "Some internal server error"],
500: "Some internal server error",

//landlord error
// landlord_name_taken: [400,"Landlord name already taken"]
701: "Landlord name already taken",

900: "Email you entered is not valid",
901:"fields from contact, email and name is missing",
902:"Some error occured while searching this email in our database",
903:"Account already exist, try with another email",
904:"Some error occured while hashing password",
905:"Some error occured while registering user",
906:"First Name you entered is not valid",
907:"Contact Number you eneterd is not valid",
908:"fields from email or password is missing",
909:"No such account exist",
910:"Last name you entered is not valid",
911:"Some error occur during jwt.sign",
912:"You have entered wrong password",
913:"Some error occur during jwt.verify",
914:"Token not available",
915:"Unable to update profile",
916:"fields from occupation, DOB, verification, address is missing",
917:"Invalid Date"



}

module.exports = errors;