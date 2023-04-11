// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Person {
    name: String,
    friends: Vec<String>,
    age: u32,
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {name}! You've been greeted from Rust!")
}

#[tauri::command]
fn osef() -> Option<Person> {
    let adam = Person {
        name: "Adam".to_string(),
        friends: vec![
            "Nana".to_string(),
            "Mamo".to_string(),
            "Louchat".to_string(),
        ],
        age: 32,
    };
    Some(adam)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, osef])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
