import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950 p-4">
      <div class="text-center">
        <ul class="flex justify-center mt-5 space-x-5">
          <li>
            <a
              href="https://www.linkedin.com/in/shivam-sharma-64b017196"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-200 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.34-.025-3.066-1.867-3.066-1.869 0-2.154 1.46-2.154 2.963v5.707h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.035 0 3.593 2.004 3.593 4.609v5.586z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:shivamsharma630.218@gmail.com"
              target="_blank"
              rel="noreferrer"
              class="text-gray-200 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/itsmeshivam3118"
              target="_blank"
              rel="noreferrer"
              class="text-gray-200 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <span class="block text-xs text-center text-gray-200 font-bold py-3">
          © 2024 CINEMENTOR. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
