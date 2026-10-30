import React from 'react';

export type TechIconId =
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'kotlin'
  | 'rust'
  | 'react'
  | 'nextjs'
  | 'vue'
  | 'angular'
  | 'vite'
  | 'tailwindcss'
  | 'nodejs'
  | 'fastapi'
  | 'django'
  | 'spring'
  | 'laravel'
  | 'llms'
  | 'langchain'
  | 'langgraph'
  | 'crewai'
  | 'n8n'
  | 'rag'
  | 'scikit-tensorflow'
  | 'neural-networks'
  | 'chromadb'
  | 'pinecone'
  | 'postgresql'
  | 'mysql'
  | 'mongodb'
  | 'prisma'
  | 'pandas'
  | 'kafka'
  | 'docker'
  | 'oracle'
  | 'vercel';

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

export function TypeScriptIcon({ size = 24, title = 'TypeScript', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M4 7h7v2.2H8.7V19H6.3V9.2H4V7zm10.7 7.1c.4.7 1 1.1 1.9 1.1.9 0 1.5-.4 1.5-1 0-.6-.5-.9-1.5-1.4-1.6-.7-2.6-1.5-2.6-2.9 0-1.7 1.4-2.9 3.3-2.9 1.5 0 2.6.6 3.2 1.8l-1.5.9c-.3-.7-.9-1-1.7-1-.9 0-1.5.5-1.5 1.1 0 .6.4.9 1.4 1.3 1.8.8 2.8 1.6 2.8 3.1 0 1.9-1.5 3-3.6 3-1.9 0-3.1-.9-3.7-2.3l1.8-.9z"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, title = 'JavaScript', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M7 16.2c.4.7 1 1.1 1.8 1.1.8 0 1.3-.4 1.3-1.1V8.5h2.2v7.7c0 1.9-1.2 2.8-3.3 2.8-1.7 0-2.8-.8-3.4-2.1l1.4-.7zm7.4.3c.5.8 1.2 1.2 2.2 1.2 1.1 0 1.8-.5 1.8-1.2 0-.8-.6-1.1-1.8-1.7-1.9-.8-3.1-1.7-3.1-3.3 0-2 1.6-3.4 3.7-3.4 1.7 0 2.9.7 3.6 2l-1.6 1c-.4-.7-1-1.1-1.9-1.1-1 0-1.6.5-1.6 1.2 0 .7.5 1.1 1.6 1.5 2.1.9 3.4 1.8 3.4 3.5 0 2.2-1.7 3.5-4 3.5-2.2 0-3.5-1-4.2-2.5l1.7-.9z"
      />
    </svg>
  );
}

export function PythonIcon({ size = 24, title = 'Python', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#3776AB"
        d="M11.92 2c-4.47 0-4.18 1.94-4.18 1.94l.01 2.01h4.25v.6H5.97S2 6.1 2 10.59s3.47 4.36 3.47 4.36h2.07v-2.92s-.11-3.47 3.41-3.47h4.22s3.3.06 3.3-3.24V3.94S18.74 2 11.92 2zm-2.36 1.53a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7z"
      />
      <path
        fill="#FFD438"
        d="M12.08 22c4.47 0 4.18-1.94 4.18-1.94l-.01-2.01h-4.25v-.6h6.02S22 17.9 22 13.41s-3.47-4.36-3.47-4.36h-2.07v2.92s.11 3.47-3.41 3.47H8.83s-3.3-.06-3.3 3.24v1.38s-.27 1.94 6.54 1.94zm2.36-1.53a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7z"
      />
    </svg>
  );
}

export function KotlinIcon({ size = 24, title = 'Kotlin', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="50%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#F88909" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="#1B1B1B" />
      <polygon points="21,3 3,3 3,21 12,21 21,12" fill="url(#kotlin-grad)" />
      <polygon points="3,3 12,12 3,21" fill="#7F52FF" />
    </svg>
  );
}

export function RustIcon({ size = 24, title = 'Rust', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#CE412B"
      {...props}
    >
      <title>{title}</title>
      <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" />
    </svg>
  );
}

export function ReactIcon({ size = 24, title = 'React', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1.5"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" />
    </svg>
  );
}

export function NextJSIcon({ size = 24, title = 'Next.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#343E48" strokeWidth="0.8" />
      <path
        d="M15.5 7.5v5.8l-5.3-7.3H8.5v12h2.2v-6.6l6 8.3c.3-.1.6-.3.9-.5.2-.2.4-.4.6-.6l-2.7-3.8V7.5h-2.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function VueJSIcon({ size = 24, title = 'Vue.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <polygon points="12,21.5 1.5,3.5 6.5,3.5 12,13 17.5,3.5 22.5,3.5" fill="#42B883" />
      <polygon points="12,13 6.5,3.5 9.5,3.5 12,8 14.5,3.5 17.5,3.5" fill="#35495E" />
    </svg>
  );
}

export function AngularIcon({ size = 24, title = 'Angular', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <polygon points="12,2 21.5,5.4 19.8,17.4 12,22 4.2,17.4 2.5,5.4" fill="#DD0031" />
      <polygon points="12,2 12,22 19.8,17.4 21.5,5.4" fill="#C3002F" />
      <polygon points="12,6 7,17.5 9.2,17.5 10.3,14.8 13.7,14.8 14.8,17.5 17,17.5" fill="#FFFFFF" />
      <polygon points="12,10.2 10.9,13 13.1,13" fill="#DD0031" />
    </svg>
  );
}

export function ViteIcon({ size = 24, title = 'Vite', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <polygon points="12,22 2,5.5 12,2 22,5.5" fill="url(#vite-grad)" />
      <polygon points="13,3 6,13 11,13 10,21 18,10 13,10" fill="#FFD427" />
    </svg>
  );
}

export function NodeJSIcon({ size = 24, title = 'Node.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path fill="#539E43" d="M12 1.5l9.5 5.5v11L12 23.5 2.5 18V7L12 1.5z" />
      <path fill="#1A2026" d="M12 3.8l7.5 4.3v8.7L12 21.2 4.5 16.8V8.1L12 3.8z" />
      <path
        fill="#539E43"
        d="M12 6.5c-2.4 0-3.9 1.3-3.9 3.2 0 3.3 5.3 1.8 5.3 3.8 0 .7-.6 1.1-1.5 1.1-1.2 0-2-.5-2.3-1.2l-1.5.9c.7 1.2 2 2 3.9 2 2.5 0 4.1-1.3 4.1-3.3 0-3.4-5.3-2-5.3-3.8 0-.6.6-1 1.5-1 1 0 1.7.4 2.1 1l1.4-.9c-.7-1.1-1.8-1.8-3.8-1.8z"
      />
    </svg>
  );
}

export function FastAPIIcon({ size = 24, title = 'FastAPI', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#009688"
      {...props}
    >
      <title>{title}</title>
      <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
    </svg>
  );
}

export function DjangoIcon({ size = 24, title = 'Django', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <path
        fill="#FFFFFF"
        d="M12.5 5.5v7.8c-.5.3-1.1.4-1.7.4-1.6 0-2.4-.9-2.4-2.5 0-1.7.9-2.7 2.4-2.7.5 0 .9.1 1.2.3V6.9c-.4-.1-.9-.2-1.4-.2-2.8 0-4.4 1.7-4.4 4.5 0 2.9 1.6 4.4 4.3 4.4 1 0 1.9-.3 2.5-.7l.2.5h1.7V5.5h-2.4zm3.8 3.5h2.2v7.2c0 1.8-.7 2.8-2.3 2.8-.7 0-1.4-.2-1.9-.5l.5-1.7c.4.2.8.4 1.2.4.9 0 1.3-.5 1.3-1.4V9zM16.3 5.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"
      />
    </svg>
  );
}

export function SpringIcon({ size = 24, title = 'Spring', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#6DB33F"
      {...props}
    >
      <title>{title}</title>
      <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z" />
    </svg>
  );
}

export function LaravelIcon({ size = 24, title = 'Laravel', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#FF2D20"
      {...props}
    >
      <title>{title}</title>
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
    </svg>
  );
}

export function LLMsIcon({ size = 24, title = 'LLMs', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
      <path fill="#A855F7" d="M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4z" />
      <circle cx="6" cy="18" r="2" fill="#38BDF8" />
      <circle cx="18" cy="18" r="2" fill="#34D399" />
      <path d="M7.8 17.2l3-2.5M16.2 17.2l-3-2.5" stroke="#71717A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function LangChainIcon({ size = 24, title = 'LangChain', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#10B981"
      {...props}
    >
      <title>{title}</title>
      <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" />
    </svg>
  );
}

export function LangGraphIcon({ size = 24, title = 'LangGraph', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#38BDF8"
      {...props}
    >
      <title>{title}</title>
      <path d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z" />
    </svg>
  );
}

export function CrewAIIcon({ size = 24, title = 'CrewAI', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#FF5A50"
      {...props}
    >
      <title>{title}</title>
      <path d="M12.482.18C7.161 1.319 1.478 9.069 1.426 15.372c-.051 5.527 3.1 8.68 8.68 8.627 6.716-.05 14.259-6.87 12.09-10.9-.672-1.292-1.396-1.344-2.687-.207-1.602 1.395-1.654.31-.207-2.893 1.757-3.98 1.705-5.322-.31-7.544C17.03.388 14.962-.388 12.482.181Zm5.322 2.068c2.273 2.015 2.376 4.236.465 8.42-1.395 3.1-2.17 3.515-3.824 1.86-1.24-1.24-1.343-3.46-.258-6.044 1.137-2.635.982-3.1-.568-1.653-3.72 3.358-6.458 9.765-5.424 12.503.464 1.189.825 1.395 2.737 1.395 2.79 0 6.303-1.705 7.957-3.926 1.756-2.274 2.79-2.274 2.79-.052 0 3.875-6.459 8.627-11.625 8.627-6.251 0-9.351-4.752-7.491-11.47.878-2.995 4.443-7.904 7.077-9.66 3.255-2.17 5.684-2.17 8.164 0z" />
    </svg>
  );
}

export function N8nIcon({ size = 24, title = 'n8n', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#EA4B71"
      {...props}
    >
      <title>{title}</title>
      <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
    </svg>
  );
}

export function RAGIcon({ size = 24, title = 'RAG (Document QA & KB)', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#0284C7" />
      <rect x="5" y="4" width="10" height="13" rx="1.5" fill="#FFFFFF" />
      <line x1="7.5" y1="7.5" x2="12.5" y2="7.5" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7.5" y1="10" x2="12.5" y2="10" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7.5" y1="12.5" x2="10.5" y2="12.5" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="18.5" y1="18.5" x2="21" y2="21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ScikitTensorFlowIcon({
  size = 24,
  title = 'Machine Learning (Scikit Learn & TensorFlow)',
  className,
  ...props
}: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#FF6F00" />
      <polygon points="12,3 4,7.5 12,12 20,7.5" fill="#FFA726" />
      <polygon points="4,7.5 12,12 12,21 4,16.5" fill="#F57C00" />
      <polygon points="20,7.5 12,12 12,21 20,16.5" fill="#E65100" />
      <circle cx="12" cy="12" r="2.5" fill="#0284C7" />
    </svg>
  );
}

export function NeuralNetworksIcon({ size = 24, title = 'Neural Networks', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#6D28D9" />
      <circle cx="6" cy="7" r="1.8" fill="#DDD6FE" />
      <circle cx="6" cy="17" r="1.8" fill="#DDD6FE" />
      <circle cx="12" cy="5" r="1.8" fill="#A78BFA" />
      <circle cx="12" cy="12" r="1.8" fill="#A78BFA" />
      <circle cx="12" cy="19" r="1.8" fill="#A78BFA" />
      <circle cx="18" cy="8.5" r="1.8" fill="#DDD6FE" />
      <circle cx="18" cy="15.5" r="1.8" fill="#DDD6FE" />
      <line x1="7.5" y1="7.5" x2="10.5" y2="11.5" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="7.5" y1="16.5" x2="10.5" y2="12.5" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="13.5" y1="12" x2="16.5" y2="9" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="13.5" y1="12" x2="16.5" y2="15" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
    </svg>
  );
}

export function ChromaDBIcon({ size = 24, title = 'ChromaDB', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="8" cy="8" r="4.5" fill="#FF5C5C" />
      <circle cx="16" cy="8" r="4.5" fill="#FFB703" />
      <circle cx="16" cy="16" r="4.5" fill="#4D96FF" />
      <circle cx="8" cy="16" r="4.5" fill="#2EC4B6" />
    </svg>
  );
}

export function PineconeIcon({ size = 24, title = 'Pinecone', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#18181B" />
      <circle cx="12" cy="6" r="2.2" fill="#10B981" />
      <circle cx="8" cy="11" r="2.2" fill="#10B981" />
      <circle cx="16" cy="11" r="2.2" fill="#10B981" />
      <circle cx="6" cy="16" r="2.2" fill="#059669" />
      <circle cx="12" cy="16" r="2.2" fill="#059669" />
      <circle cx="18" cy="16" r="2.2" fill="#059669" />
      <circle cx="12" cy="20.5" r="1.5" fill="#047857" />
    </svg>
  );
}

export function PostgreSQLIcon({ size = 24, title = 'PostgreSQL', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#336791"
        d="M17.5 5.5C16.3 3.4 14.2 2 11.8 2 7.5 2 4 5.5 4 9.8c0 2 .8 3.9 2.1 5.3v4.4c0 .8.7 1.5 1.5 1.5h1.2c.4 0 .8-.2 1.1-.5l1.6-1.6c.5.1 1 .2 1.5.2 4.3 0 7.8-3.5 7.8-7.8 0-2.3-1-4.4-2.8-5.8zm-5.7 11.3c-.6 0-1.1-.1-1.7-.2l-1.3 1.3H8.3v-3.2c-.9-1-1.5-2.3-1.5-3.9 0-3 2.4-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 6-5.5 6z"
      />
      <circle cx="14" cy="9.5" r="1.2" fill="#FFFFFF" />
      <path d="M10.5 13.5c.5.8 1.3 1.3 2.3 1.3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MySQLIcon({ size = 24, title = 'MySQL', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#00758F" />
      <path
        fill="#F29111"
        d="M12 4c-3.8 0-6.9 2.5-7.7 6 .6-.3 1.3-.5 2-.5 2.5 0 4.6 1.8 5 4.2.8-.2 1.6-.4 2.5-.4 3.4 0 6.2 2.2 6.2 5 0 .6-.1 1.2-.4 1.7C20.8 18.5 22 15.9 22 13c0-5-4.5-9-10-9z"
      />
      <circle cx="8.5" cy="8.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function MongoDBIcon({ size = 24, title = 'MongoDB', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#47A248"
        d="M12 2c-.3 0-.5.2-.6.4C10.2 4.7 6 10.7 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4.3-4.2-10.3-5.4-12.6-.1-.2-.3-.4-.6-.4z"
      />
      <path
        fill="#3FA037"
        d="M12 2v19c3.3 0 6-2.7 6-6 0-4.3-4.2-10.3-5.4-12.6-.1-.2-.3-.4-.6-.4z"
      />
      <path fill="#FFFFFF" d="M12 21.5c-.3 0-.5-.2-.5-.5v-4.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 .3-.2.5-.5.5z" />
    </svg>
  );
}

export function PrismaIcon({ size = 24, title = 'Prisma', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="#2D3748"
      {...props}
    >
      <title>{title}</title>
      <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
    </svg>
  );
}

export function PandasIcon({ size = 24, title = 'Pandas', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path fill="#E70488" d="M16.922 0h2.623v18.104h-2.623z" />
      <path fill="#FFD43B" d="M12.796 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623z" />
      <path fill="#00A3E0" d="M4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67z" />
    </svg>
  );
}

export function KafkaIcon({ size = 24, title = 'Apache Kafka', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      fill="currentColor"
      {...props}
    >
      <title>{title}</title>
      <path d="M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118" />
    </svg>
  );
}

export function DockerIcon({ size = 24, title = 'Docker', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#2496ED"
        d="M13.98 9.07h1.96v1.96h-1.96zM11.53 9.07h1.96v1.96h-1.96zM9.08 9.07h1.96v1.96H9.08zM11.53 6.62h1.96v1.96h-1.96zM9.08 6.62h1.96v1.96H9.08zM6.63 9.07h1.96v1.96H6.63zM4.18 9.07h1.96v1.96H4.18zM11.53 4.17h1.96v1.96h-1.96zM9.08 4.17h1.96v1.96H9.08zM23.97 12.06c-.46-.35-1.53-.49-2.37-.36-.14-.72-.6-1.39-1.29-1.85l-.57-.38-.38.57c-.47.7-.6 1.63-.38 2.47-.54.3-1.34.42-2.38.42H1.5c-.32 0-.58.26-.58.58 0 2.27.79 4.39 2.24 5.96 1.48 1.61 3.5 2.53 5.68 2.53 6.63 0 11.96-4.5 12.98-10.74.88-.08 1.77-.37 2.15-.99.07-.12.08-.2.08-.21 0-.02 0-.09-.08-.19v.19z"
      />
    </svg>
  );
}

export function OracleIcon({ size = 24, title = 'Oracle Cloud', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#F80000"
        d="M16.5 6h-9C4.5 6 2 8.5 2 11.5s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5S19.5 6 16.5 6zm-.2 8.2h-8.6c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h8.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7z"
      />
    </svg>
  );
}

export function TailwindCSSIcon({ size = 24, title = 'Tailwind CSS', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#06B6D4"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
      />
    </svg>
  );
}

export function VercelIcon({ size = 24, title = 'Vercel', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path fill="currentColor" d="M12 2L23 21H1L12 2Z" />
    </svg>
  );
}

export interface TechIconDynamicProps extends TechIconProps {
  id: TechIconId | string;
}

export function TechIcon({ id, ...props }: TechIconDynamicProps) {
  switch (id.toLowerCase()) {
    case 'typescript':
    case 'ts':
      return <TypeScriptIcon {...props} />;
    case 'javascript':
    case 'js':
      return <JavaScriptIcon {...props} />;
    case 'python':
    case 'py':
      return <PythonIcon {...props} />;
    case 'kotlin':
    case 'kt':
      return <KotlinIcon {...props} />;
    case 'rust':
    case 'rs':
      return <RustIcon {...props} />;
    case 'react':
    case 'reactjs':
      return <ReactIcon {...props} />;
    case 'nextjs':
    case 'next.js':
    case 'next':
      return <NextJSIcon {...props} />;
    case 'vue':
    case 'vuejs':
    case 'vue.js':
      return <VueJSIcon {...props} />;
    case 'angular':
    case 'ng':
      return <AngularIcon {...props} />;
    case 'vite':
      return <ViteIcon {...props} />;
    case 'tailwindcss':
    case 'tailwind':
    case 'tailwind css':
      return <TailwindCSSIcon {...props} />;
    case 'nodejs':
    case 'node.js':
    case 'node':
      return <NodeJSIcon {...props} />;
    case 'fastapi':
      return <FastAPIIcon {...props} />;
    case 'django':
    case 'dj':
      return <DjangoIcon {...props} />;
    case 'spring':
    case 'springboot':
    case 'spring boot':
      return <SpringIcon {...props} />;
    case 'laravel':
      return <LaravelIcon {...props} />;
    case 'llms':
    case 'llm':
      return <LLMsIcon {...props} />;
    case 'langchain':
      return <LangChainIcon {...props} />;
    case 'langgraph':
      return <LangGraphIcon {...props} />;
    case 'crewai':
      return <CrewAIIcon {...props} />;
    case 'n8n':
      return <N8nIcon {...props} />;
    case 'rag':
      return <RAGIcon {...props} />;
    case 'scikit-tensorflow':
    case 'scikitlearn':
    case 'tensorflow':
    case 'scikit':
    case 'machine learning':
      return <ScikitTensorFlowIcon {...props} />;
    case 'neural-networks':
    case 'neural networks':
    case 'neural':
      return <NeuralNetworksIcon {...props} />;
    case 'chromadb':
    case 'chroma':
      return <ChromaDBIcon {...props} />;
    case 'pinecone':
      return <PineconeIcon {...props} />;
    case 'postgresql':
    case 'postgres':
      return <PostgreSQLIcon {...props} />;
    case 'mysql':
      return <MySQLIcon {...props} />;
    case 'mongodb':
    case 'mongo':
      return <MongoDBIcon {...props} />;
    case 'prisma':
      return <PrismaIcon {...props} />;
    case 'pandas':
      return <PandasIcon {...props} />;
    case 'kafka':
    case 'apache kafka':
      return <KafkaIcon {...props} />;
    case 'docker':
      return <DockerIcon {...props} />;
    case 'oracle':
    case 'oracle cloud':
    case 'oci':
      return <OracleIcon {...props} />;
    case 'vercel':
      return <VercelIcon {...props} />;
    default:
      return (
        <span
          className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase rounded bg-surface-raised text-muted px-1.5 py-0.5"
          role="img"
          aria-label={props.title || id}
        >
          {id.slice(0, 3)}
        </span>
      );
  }
}
