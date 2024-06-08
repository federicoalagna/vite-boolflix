
<script>
import Search from './components/Search.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Search,
    Main,
  },
  name: 'App',
  setup() {
    const backgrounds = [
    'url("https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdHbjrX0uL1mH7uUW7VZ-p5GJOSNNRko_9A_12Mlv5wVYQIDy4nuupxLHxkDj9V0e1OLBs_s8ZlxFkyhPlK5XkrlTK0c7yP42LLinQdYhz8lqfgUcOH68JAbEcY45jG02gCI1NyKVf1lqxsQFmcNN5szbv8.jpg?r=aee")',
    'url("https://www.chromethemer.com/download/hd-wallpapers/minimalist-spiderman-3840x2160.jpg")',

    'url("https://i.pinimg.com/originals/5d/ea/9c/5dea9cbee13ebf1105bca2440b9266a4.jpg")',
      'url("https://images7.alphacoders.com/601/601841.jpg")',
      'url("https://wallpapercave.com/wp/wp6909381.jpg")',
      'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a4e72d6-d48e-43de-89db-4bf1095a63ad/dfbf3pa-4e3bac2d-3dea-4808-83d3-251b010c5d3f.jpg/v1/fill/w_1280,h_720,q_75,strp/fight_club__1999____8k_upscaled_wallpaper_by_hotripak_dfbf3pa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNGE0ZTcyZDYtZDQ4ZS00M2RlLTg5ZGItNGJmMTA5NWE2M2FkXC9kZmJmM3BhLTRlM2JhYzJkLTNkZWEtNDgwOC04M2QzLTI1MWIwMTBjNWQzZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PpsUdqL_E9YEri9rJroXP-Hl2gNszszu-SgZNwfBam4")', 
     
    ];

    let currentIndex = 0;

    const changeBackground = () => {
      document.body.style.backgroundImage = backgrounds[currentIndex];
      currentIndex = (currentIndex + 1) % backgrounds.length;
    };

    setInterval(changeBackground, 8000); 
    changeBackground(); 

    return {};
  },
};

</script>

<template>
  
    
    <Search />
    <Main />
  
</template>
