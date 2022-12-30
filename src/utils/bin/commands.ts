// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  var description = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (Object.keys(bin).sort()[i - 1] === 'help') {
      description = 'Display this help message.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'about') {
      description = 'About me.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'projects') {
      description = 'My GitHub projects.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'resume') {
      description = 'My latest resume.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'donate') {
      description = 'Support my work.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'email') {
      description = 'Email me.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'github') {
      description = 'My github.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'linkedin') {
      description = 'My linkedin.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'website') {
      description = 'My website.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'sumfetch') {
      description = 'Display my summary.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'readme') {
      description = 'My github readme.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'clear') {
      description = 'Clear terminal.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'date') {
      description = "Print today's date.";
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'time') {
      description = 'Print current time.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
    else if (Object.keys(bin).sort()[i - 1] === 'whoami') {
      description = 'Learn who you are.';
      c += Object.keys(bin).sort()[i - 1] + ' - ' + description + '\n';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display my summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

// Resume
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.ko_fi}" target="_blank">ko-fi</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.stripe}" target="_blank">stripe</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.github_sponsors}" target="_blank">stripe</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

// GitHub
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Linkedin
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Google
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// DuckDuckGo
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// Bing
export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

// Reddit
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

// Who am I?
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

// List directories
export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

// Change directory
export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

// Print date
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Vi
export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

// Vim
export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

// Neovim
export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

// Emacs
export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

// Sudo
export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ████████╗██╗███╗   ███╗ ██╗ ███████╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
  ╚══██╔══╝██║████╗ ████║ ██║ ██╔════╝    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
     ██║   ██║██╔████╔██║ ╚═╝ ███████╗       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
     ██║   ██║██║╚██╔╝██║     ╚════██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
     ██║   ██║██║ ╚═╝ ██║     ███████║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
     ╚═╝   ╚═╝╚═╝     ╚═╝     ╚══════╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
