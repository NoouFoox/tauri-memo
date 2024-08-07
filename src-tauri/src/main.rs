// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// 设置窗口顶置

// use tauri::{LogicalSize, Size};


#[tauri::command]
fn set_always_on_top(window: tauri::Window, always_on_top: bool)->bool {
    // let size :Size =Size::Logical(LogicalSize{
    //     width: 20.0,
    //     height: 600.0
    // });
    // let _ = window.set_size(size);
    let _ = window.set_always_on_top(always_on_top);
    always_on_top
}

fn main() {
    tauri::Builder::default()
        // .setup(|app| {
        //     let main = app.get_window("main").unwrap();
        //     main.open_devtools();
        //     Ok(())
        // })
        .invoke_handler(tauri::generate_handler![set_always_on_top])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
