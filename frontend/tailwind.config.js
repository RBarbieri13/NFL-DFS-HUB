/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'sidebar': 'calc(var(--sidebar-width) * 1px)',
  			'sidebar-collapsed': 'calc(var(--sidebar-width-collapsed) * 1px)',
  			'player-detail': 'calc(var(--player-detail-min-width) * 1px)',
  		},
  		width: {
  			'sidebar': 'calc(var(--sidebar-width) * 1px)',
  			'sidebar-collapsed': 'calc(var(--sidebar-width-collapsed) * 1px)',
  		},
  		minWidth: {
  			'player-detail': 'calc(var(--player-detail-min-width) * 1px)',
  		},
  		maxHeight: {
  			'player-detail': '550px',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			nfl: {
  				player: {
  					header: 'hsl(var(--player-header))',
  					border: 'hsl(var(--player-border))'
  				},
  				info: {
  					header: 'hsl(var(--info-header))',
  					border: 'hsl(var(--info-border))'
  				},
  				usage: {
  					header: 'hsl(var(--usage-header))',
  					border: 'hsl(var(--usage-border))'
  				},
  				rushing: {
  					header: 'hsl(var(--rushing-header))',
  					border: 'hsl(var(--rushing-border))'
  				},
  				receiving: {
  					header: 'hsl(var(--receiving-header))',
  					border: 'hsl(var(--receiving-border))'
  				},
  				passing: {
  					header: 'hsl(var(--passing-header))',
  					border: 'hsl(var(--passing-border))'
  				},
  				fantasy: {
  					header: 'hsl(var(--fantasy-header))',
  					border: 'hsl(var(--fantasy-border))'
  				}
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};