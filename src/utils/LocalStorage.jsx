localStorage.clear()

const employees = [
    {
        "id": 1,
        "name": "Rahul Sharma",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount": {
            "newTask": 4,
            "acceptedTask": 3,
            "failedTask": 1,
            "completedTask": 2
        },
        "tasks": [
            {
                "title": "Prepare Sales Report",
                "description": "Compile monthly sales performance data.",
                "date": "2025-01-10",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Follow-Up",
                "description": "Contact pending clients and update status.",
                "date": "2025-01-12",
                "category": "Communication",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Attend weekly performance review meeting.",
                "date": "2025-01-08",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]

    },
    {
        "id": 2,
        "name": "Amit Verma",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "newTask": 6,
            "acceptedTask": 4,
            "failedTask": 2,
            "completedTask": 3
        },
        "tasks": [
            {
                "title": "Update Website Content",
                "description": "Refresh homepage banners and text.",
                "date": "2025-01-09",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Bug Fixing",
                "description": "Resolve reported UI issues.",
                "date": "2025-01-11",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deployment",
                "description": "Push updates to production server.",
                "date": "2025-01-15",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Neha Singh",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "newTask": 3,
            "acceptedTask": 2,
            "failedTask": 0,
            "completedTask": 2
        },
        "tasks": [
            {
                "title": "Design New Banner",
                "description": "Create promotional graphics for campaign.",
                "date": "2025-01-14",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Logo Revision",
                "description": "Update company logo as per feedback.",
                "date": "2025-01-10",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Presentation Slides",
                "description": "Design slides for marketing pitch.",
                "date": "2025-01-13",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Priya Mehta",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "newTask": 7,
            "acceptedTask": 5,
            "failedTask": 3,
            "completedTask": 4
        },
        "tasks": [
            {
                "title": "Inventory Check",
                "description": "Verify stock availability.",
                "date": "2025-01-09",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Supplier Meeting",
                "description": "Discuss price and contract renewal.",
                "date": "2025-01-16",
                "category": "Business",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Stock Report",
                "description": "Submit inventory status report.",
                "date": "2025-01-18",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Rohit Kumar",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": {
            "newTask": 2,
            "acceptedTask": 2,
            "failedTask": 1,
            "completedTask": 1
        },
        "tasks": [{
            "title": "Customer Support",
            "description": "Resolve customer complaints.",
            "date": "2025-01-11",
            "category": "Support",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
        },
        {
            "title": "Ticket Review",
            "description": "Check pending support tickets.",
            "date": "2025-01-12",
            "category": "Support",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
        },
        {
            "title": "Performance Report",
            "description": "Submit weekly support summary.",
            "date": "2025-01-17",
            "category": "Reporting",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
        }]
    }
]



const admin = {
    "name": "Surya",
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}


export const SetLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}

