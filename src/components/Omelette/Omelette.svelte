<script>

    export let color = 'blue'
    const colors = {
        blue: '#8BD3DD',
        pink: '#F582AE'
    }    
   
</script> 

<svg width="211" height="211" viewBox="0 0 180 211" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="spinner" fill-rule="evenodd" clip-rule="evenodd" d="M92.6974 33.0171C106.221 33.5823 113.984 49.0748 126.476 54.2877C141.5 60.5574 162.957 53.5995 172.905 66.4885C182.505 78.9265 172.303 97.1088 171.644 112.808C171.015 127.783 175.362 143.315 169.105 156.934C162.65 170.986 149.524 180.395 136.657 188.968C123.156 197.964 108.895 206.94 92.6974 207.843C76.1494 208.766 57.473 205.816 45.8136 194.034C34.2623 182.362 40.0174 162.147 32.8523 147.369C26.416 134.094 10.3057 127.044 6.43127 112.808C2.1899 97.2245 0.236408 77.7999 10.5318 65.3579C21.0745 52.6171 41.8632 57.4508 57.2493 51.3947C69.8485 46.4356 79.1697 32.4518 92.6974 33.0171Z" fill={colors[color]} stroke="#001858" stroke-width="6"/>
<circle cx="95.9998" cy="114" r="50" fill="#F3D2C1" stroke="#001858" stroke-width="6"/>
<path d="M80.9998 127.451C95.6744 135.088 98.8685 134.554 112.923 126.137" stroke="#001858" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M119 106C110.72 96.5076 109.008 96.8704 102 105.871" stroke="#001858" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M88.9998 106C80.7204 96.5076 79.0083 96.8704 71.9998 105.871" stroke="#001858" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<style>
    #spinner {
    animation: rotate 1.4s infinite;
    transform-origin: center;
	}
	@keyframes rotate {
		from {transform: rotate(0);}
		to {transform: rotate(360deg);}
	}
    
</style>