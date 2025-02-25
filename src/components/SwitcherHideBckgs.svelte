<script>
  let status = $state(false)

  const handleSwitcher = () => {
    status = !status

    const bckgSection = document.querySelector('#bckg-section')
    if (status) {
      bckgSection.classList.add('opacity-0')
      bckgSection.classList.remove('opacity-100')
    } else {
      bckgSection.classList.add('opacity-100')
      bckgSection.classList.remove('opacity-0')
    }
  }
</script>

<div class="flex items-center justify-center mx-auto rounded-full gap-x-2 tracking-wide">
  <h3 class="text-white/90">Hidden cards</h3>
  <button
    type="button"
    aria-label="Toggle hide bckgs section"
    onclick={handleSwitcher}
    class={`cursor-pointer w-[60px] h-[28px] opacity-75 hover:opacity-100 flex items-center rounded-full px-1 ${
    status ? 'bg-[#12CB66]' : 'bg-[#BEBEBE]'
    }`}
    >
      <div class={`size-[20px] rounded-full transition-all bg-white ${status ? 'translate-x-8' : ''}`}></div>
    </button>
</div>