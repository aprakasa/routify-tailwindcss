<script>
    import { metatags } from "@roxi/routify";
    metatags.title = "Routify Tailwind";
    metatags.description = "Description coming soon...";

    let theme = "light";
    try {
        theme = localStorage.theme;
    } catch (e) {
        // ignore — could be SSR, or e.g. Firefox with restrictive permissions
    }
    const toggle = () => {
        const { classList } = document.documentElement;
        classList.remove(theme);
        theme = theme === "light" ? "dark" : "light";
        classList.add(theme);
        on;
        try {
            localStorage.theme = theme;
        } catch (e) {
            // ignore
        }
    };
</script>

<div class="flex justify-center items-center">
    <div class="text-center p-8">
        <h1 class="text-6xl font-bold uppercase mb-8">Routify Tailwind</h1>

        <button
            class="uppercase font-bold text-2xl border border-gray-800 dark:border-gray-100 focus:outline-none text-gray-900 dark:text-gray-100 rounded shadow py-2 px-8"
            on:click={toggle}
            >Enable {#if theme === "light"}🌝{:else}🌞{/if} mode</button
        >
    </div>
</div>
