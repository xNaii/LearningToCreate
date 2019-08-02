<template>
  <div>
    <Carousel/>
    <p></p>
    <b-row>
      <b-col md="12">
        <center>
          <b-card-group deck>
            <b-card
              v-for="(card, index) in cards"
              :key="`card-${index}`"
              :title="card.title"
              :img-src="card.img"
              img-alt="Image"
              img-top
              :tag="card.tag"
              style="max-width: 100%;"
              class="mb-2"
            >
              <b-card-text>{{card.text}}</b-card-text>

              <b-button href="#" variant="primary">{{card.button}}</b-button>
            </b-card>
          </b-card-group>
        </center>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";

export default {
  name: "Main",
  components: {
    Carousel
  },
  data() {
    return {
      cards: [
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        },
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        },
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        },
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        },
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        },
        {
          title: "Card Title",
          img: "https://picsum.photos/600/300/?image=25",
          tag: "article",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          button: "GO"
        }
      ]
    };
  }
};
</script>

<style>
.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 0.5rem;
  margin: 0 auto;
}
.col-md-4 {
  justify-content: center;
  align-self: flex-end;
}
</style>