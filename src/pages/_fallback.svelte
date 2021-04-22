<script>
    import { url } from '@roxi/routify'
</script>

<div class="text-center absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4">
  <div class="text-4xl">404</div>
  <div class="text-xl">Page not found. 
  <!-- link to the parent folder of _fallback.svelte -->
  <a href={$url('../')}>Go back</a>
  </div>
</div>
