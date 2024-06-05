const config = {
    apiAuth: {
      baseURL: "http://localhost:4000",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    apiAnalytics: {
      baseURL: "http://localhost:4001",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    apiCollaboration: {
      baseURL: "http://localhost:4002",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    apiNotifications: {
      baseURL: "http://localhost:4003",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    apiTools: {
      baseURL: "http://localhost:4004",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    },
    apiWorkspaces: {
      baseURL: "http://localhost:4005",
      timeout: 5000,
      retryAttempts: 3,
      defaultHeaders: {
        "Content-Type": "application/json"
      }
    }
  }
  
  export default config;
  