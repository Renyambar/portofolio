import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
  colored?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = '',
  size = 18,
  colored = false,
}) => {
  const norm = name.toLowerCase().trim();

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M11.914 2c-5.043 0-4.726 2.186-4.726 2.186l.006 2.265h4.783v.68H5.212S2 6.78 2 11.834c0 5.053 2.793 4.877 2.793 4.877h1.666v-2.338s-.09-2.794 2.738-2.794h4.708v-.706H9.173s-2.673.08-2.673-2.607c0-2.686 2.378-2.607 2.378-2.607h6.035s2.443.088 2.443-2.45c0-2.538-2.443-2.209-2.443-2.209H11.914zm-1.353 1.417a.807.807 0 11.001 1.614.807.807 0 01-.001-1.614z"
          fill={colored ? '#3776AB' : 'currentColor'}
        />
        <path
          d="M12.086 22c5.043 0 4.726-2.186 4.726-2.186l-.006-2.265h-4.783v-.68h6.765s3.212.351 3.212-4.703c0-5.053-2.793-4.877-2.793-4.877h-1.666v2.338s.09 2.794-2.738 2.794H9.099v.706h4.734s2.673-.08 2.673 2.607c0 2.686-2.378 2.607-2.378 2.607H8.093s-2.443-.088-2.443 2.45c0 2.538 2.443 2.209 2.443 2.209h4.992zm1.353-1.417a.807.807 0 11-.001-1.614.807.807 0 01.001 1.614z"
          fill={colored ? '#FFD43B' : 'currentColor'}
        />
      </svg>
    );
  }

  // PHP
  if (norm.includes('php')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4.77 12.87l.45-2.25h1.2c.98 0 1.64-.17 2-.51.35-.34.46-.86.32-1.57-.14-.7-.47-1.15-.99-1.34-.51-.2-1.3-.29-2.35-.29H5.52l-1.59 7.96h1.3l.63-3.15h1.37zm5.55 0l.45-2.25h1.2c.98 0 1.64-.17 2-.51.35-.34.46-.86.32-1.57-.14-.7-.47-1.15-.99-1.34-.51-.2-1.3-.29-2.35-.29h-2.34l-1.59 7.96h1.3zm6.47-5.71h-1.62l-.45 2.25h1.62c.48 0 .85.08 1.09.25.24.16.32.44.25.82-.08.38-.27.65-.58.82-.31.16-.76.25-1.36.25h-1.39l-.45 2.25h2.61c.96 0 1.7-.19 2.2-.56.51-.38.83-.93.97-1.66.15-.74.05-1.33-.29-1.78-.34-.44-.97-.68-1.89-.68z" />
      </svg>
    );
  }

  // Laravel
  if (norm.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M20.25 7.5L12 2.75 3.75 7.5v9L12 21.25l8.25-4.75v-9zM12 4.48l6.45 3.72-2.73 1.58-6.45-3.72L12 4.48zm-1 9.04L5.25 10.3l2.73-1.58 5.75 3.32-2.73 1.48zm-6-5.24l6.45 3.72-2.73 1.58-6.45-3.72 2.73-1.58zm1 10.44v-6.36l2.73-1.48v6.26L6 18.72zm7 0v-6.26l2.73-1.58v6.26L13 18.72zm5.75-2.74L16 17.56v-6.26l2.75-1.58v6.26z"
          fill={colored ? '#FF2D20' : 'currentColor'}
        />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres') || norm.includes('sql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    );
  }

  // YOLO / Object Detection / Vision
  if (norm.includes('yolo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      </svg>
    );
  }

  // ROS / ROS 2
  if (norm.includes('ros')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.2 7.2l2.6 3.6m2.4 2.4l2.6 3.6m0-9.6l-2.6 3.6m-2.4 2.4l-2.6 3.6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  // OpenCV
  if (norm.includes('opencv')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="7" r="4" stroke={colored ? '#EA4335' : 'currentColor'} strokeWidth="2.5" />
        <circle cx="7" cy="16" r="4" stroke={colored ? '#4285F4' : 'currentColor'} strokeWidth="2.5" />
        <circle cx="17" cy="16" r="4" stroke={colored ? '#34A853' : 'currentColor'} strokeWidth="2.5" />
      </svg>
    );
  }

  // PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#EE4C2C' : 'currentColor'}>
        <path d="M13.67 2.15a8.7 8.7 0 0 0-4.7 1.48L6.8 5.76a7.28 7.28 0 0 0-3.3 6.13c0 4.15 3.37 7.52 7.52 7.52a7.52 7.52 0 0 0 7.42-6.33h-2.05a5.48 5.48 0 0 1-5.37 4.28 5.47 5.47 0 0 1-5.47-5.47 5.41 5.41 0 0 1 2.37-4.44l2.36-1.5a6.57 6.57 0 0 1 3.32-1.07c2.6 0 4.8 1.8 5.34 4.22h2.06a7.51 7.51 0 0 0-7.37-6.43zm2.57 3.9a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7z" />
      </svg>
    );
  }

  // TensorFlow
  if (norm.includes('tensorflow')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#FF6F00' : 'currentColor'}>
        <path d="M12 2l9 5.2v10.4L12 23 3 17.6V7.2L12 2zm0 2.4L5 9v6l7 4.1 7-4.1V9l-7-4.6zm-1 5.6h2v6h-2v-6zm-3-1.5h8v2H8v-2z" />
      </svg>
    );
  }

  // TensorRT / NVIDIA
  if (norm.includes('tensorrt') || norm.includes('nvidia')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#76B900' : 'currentColor'}>
        <path d="M12.01 4C6.27 4 1.5 8.1 1.5 13.04c0 3.8 2.8 7.02 6.84 8.24-.04-.54-.06-.9-.06-1.34 0-1.88.58-3.4 1.74-4.52-1.84-.52-3.1-2.1-3.1-3.96 0-2.3 2.02-4.16 4.52-4.16 1.48 0 2.8.66 3.66 1.72.86-1.06 2.18-1.72 3.66-1.72 2.5 0 4.52 1.86 4.52 4.16 0 1.86-1.26 3.44-3.1 3.96 1.16 1.12 1.74 2.64 1.74 4.52 0 .44-.02.8-.06 1.34 4.04-1.22 6.84-4.44 6.84-8.24C22.5 8.1 17.73 4 12.01 4z" />
      </svg>
    );
  }

  // OpenVINO / Intel
  if (norm.includes('openvino') || norm.includes('intel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#0071C5' : 'currentColor'}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#38BDF8' : 'currentColor'}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#2496ED' : 'currentColor'}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.12a.185.185 0 00.185-.185V9.006a.186.186 0 00-.186-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-1.01-1.28-1.834-2.222-2.072l-.46-.118-.28.388c-.673.93-1.62 1.633-2.733 2.03-1.077.385-2.25.434-3.397.142h-.008c-.147-.037-.297-.08-.445-.129l-.316-.104-.15.3c-.328.653-.82 1.185-1.42 1.543H1.056a.488.488 0 00-.482.417c-.417 2.456.242 4.96 1.806 6.87 1.48 1.808 3.657 2.87 6.13 2.993 4.96.247 10.37-2.07 13.064-5.632.96-1.272 1.517-2.793 1.61-4.402.03-.508.016-1.026.576-2.206z" />
      </svg>
    );
  }

  // Linux / Ubuntu
  if (norm.includes('linux') || norm.includes('ubuntu') || norm.includes('wsl')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .5-.12.97-.34 1.39l2.12 2.12C17.47 10.45 18 9.04 18 7.5 18 4.46 15.54 2 12.5 2c-1.54 0-2.95.53-4.01 1.22l2.12 2.12C11.03 5.12 11.5 5 12 5zm-5.5 3.5c0 1.54.53 2.95 1.22 4.01l2.12-2.12C9.12 10.03 9 9.56 9 9c0-1.66 1.34-3 3-3 .56 0 1.03.12 1.45.34l2.12-2.12C14.51 3.53 13.1 3 11.5 3 8.46 3 6 5.46 6 8.5zm11 7c0-1.54-.53-2.95-1.22-4.01l-2.12 2.12c.72.39.84.86.84 1.42 0 1.66-1.34 3-3 3-.56 0-1.03-.12-1.45-.34l-2.12 2.12c1.06.69 2.47 1.22 4.07 1.22 3.04 0 5.5-2.46 5.5-5.53z" />
      </svg>
    );
  }

  // Git / GitHub
  if (norm.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#F05032' : 'currentColor'}>
        <path d="M21.62 10.65L13.35 2.38a1.67 1.67 0 00-2.36 0L8.63 4.74l3.14 3.14a2 2 0 012.52 2.53l3.03 3.03a2 2 0 11-1.18 1.18l-2.82-2.82v5.03a2 2 0 11-1.67 0v-5.24a2 2 0 01-1.07-2.61L7.45 5.92 2.38 10.99a1.67 1.67 0 000 2.36l8.27 8.27a1.67 1.67 0 002.36 0l8.61-8.61a1.67 1.67 0 000-2.36z" />
      </svg>
    );
  }

  // Flutter / Dart
  if (norm.includes('flutter') || norm.includes('dart')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#02569B' : 'currentColor'}>
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6 15.7L2.3 12 14.314 24h7.37L10.37 12.686 6 15.7zm8.314-3.014L10.37 16.63 14.314 20.57h7.37l-3.943-3.943 3.943-3.943h-7.37z" />
      </svg>
    );
  }

  // JavaScript / TypeScript
  if (norm.includes('javascript') || norm.includes('js')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#F7DF1E' : 'currentColor'}>
        <rect width="24" height="24" rx="4" fill={colored ? '#F7DF1E' : 'currentColor'} />
        <path
          d="M7.5 17.5c.8.5 1.8.8 2.8.8 2 0 3.2-1 3.2-2.9v-7.9h-2.1v7.9c0 .8-.5 1.2-1.2 1.2-.5 0-1-.2-1.4-.4l-1.3 1.3zm9 0c.9.5 2 .8 3.1.8 2.5 0 3.9-1.3 3.9-3.2 0-1.8-1.2-2.6-2.7-3.2-.9-.4-1.5-.7-1.5-1.2 0-.4.4-.8 1.1-.8.7 0 1.4.2 2 .5l1-1.5c-.8-.5-1.8-.8-2.9-.8-2.3 0-3.6 1.3-3.6 3 0 1.7 1.1 2.5 2.6 3.1 1 .4 1.6.7 1.6 1.3 0 .5-.5.9-1.3.9-.9 0-1.8-.3-2.5-.7l-.8 1.8z"
          fill={colored ? '#000000' : '#141213'}
        />
      </svg>
    );
  }

  // Power BI
  if (norm.includes('power bi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#F2C811' : 'currentColor'}>
        <rect x="4" y="14" width="3.5" height="7" rx="1" />
        <rect x="10" y="8" width="3.5" height="13" rx="1" />
        <rect x="16" y="3" width="3.5" height="18" rx="1" />
      </svg>
    );
  }

  // Midtrans / Payment / API
  if (norm.includes('midtrans') || norm.includes('payment') || norm.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    );
  }

  // VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={colored ? '#007ACC' : 'currentColor'}>
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.276a1 1 0 00-.033 1.488L4.015 12 .294 15.236a1 1 0 00.033 1.488l1.322 1.217a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.94-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    );
  }

  // Roboflow / Label Studio / Data
  if (norm.includes('roboflow') || norm.includes('label')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }

  // Default clean code icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
