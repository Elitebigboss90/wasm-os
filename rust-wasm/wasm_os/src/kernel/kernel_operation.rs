pub enum SysCall {
    CreateFile(String, String), // (path, content)
    ReadFile(String),           // (path)
    WriteFile(String, String),  // (path, content)
    DeleteFile(String),         // (path)
    StartProcess(String),       // (name)
    StopProcess(String),        // (name)
    // Add more as needed
}