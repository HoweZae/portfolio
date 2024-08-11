<script>
    export let content = "";
</script>

<style>
    #copybutton {
        --tw-text-opacity: 1;
        color: transparent;
        stroke-width: 1;
    }

    .flex:hover #copybutton {
        color: rgb(100 116 139 / var(--tw-text-opacity)) /* #64748b */;
    }

    #copybutton:hover{
        stroke-width: 2;
    }
</style>

<div
    class="basis-1/3 flex justify-between
    bg-gradient-to-r hover:from-slate-100 hover:to-slate-100
    p-2 rounded-xl" >
    <!-- svelte-ignore a11y-missing-content -->
    <h5></h5>
    <h5>{ content }</h5>
    <button type="button" on:click>
        <svg id="copybutton"
            class="h-5 w-5 stroke-current stroke-1"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z" 
                stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    </button>
</div>