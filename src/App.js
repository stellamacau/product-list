import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div class="min-h-screen flex justify-center items-center bg-slate-200">
        <div class="flex max-w-3xl mx-auto w-full gap-x-8">
          <div class="w-1/2">
            <h2 class="text-2xl font-bold">Apple Products</h2>
            <ul class="mt-4 flex flex-col gap-y-3">
              <li class="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer bg-slate-800 transition">
                iPhone
              </li>
              <li class="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer hover:bg-slate-100 transition">
                iPad
              </li>
              <li class="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer bg-slate-800 transition">
                Mac
              </li>
              <li class="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer hover:bg-slate-100 transition">
                Apple TV
              </li>
              <li class="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer hover:bg-slate-100 transition">
                HomePod
              </li>
            </ul>
            <p class="mt-3 text-slate-400 text-sm">2 item(s) selected</p>
          </div>
          <div class="w-1/2">
            <h2 class="text-2xl font-bold text-slate-400">Selected Products</h2>
            <p class="mt-4 text-slate-800 text-lg">iPhone</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//text-white
