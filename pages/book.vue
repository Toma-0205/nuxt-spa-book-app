<template>
  <div>
    <NuxtChild :books="books" 
    @add-book-list="addBook" 
    @update-book-info="updateBookInfo"
    @delete-local-storage="deleteLocalStorage"
    />
  </div>
</template>

<script>
const STORAGE_KEY = 'books'

export default {
    data(){
        return{
            books: [],
            newBook: null
        }
    },
    created() {
        if (localStorage.getItem(STORAGE_KEY)) {
        try {
            this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
        } catch(e) {
            // localStorage.removeItem(STORAGE_KEY);
        }
        }
    },
    methods: {
        addBook(e) {
        //     console.log(e)
        // 実際に何かしたことを入力する
        //     if (!this.newBook) {
        //         return;
        //     }

            this.books.push({
                id: this.books.length,
                title: e.title,
                image: e.image,
                description: e.description,
                readDate: '',
                memo: '',
            });
            // this.newBook = '';
            this.savebooks();
            // console.log(this.books.slice(-1)[0].id)
            this.goToEditPage(this.books.slice(-1)[0].id)
        },
        removeBook(x) {
            this.books.splice(x, 1);
            this.savebooks();
        },
        savebooks() {
            const parsed = JSON.stringify(this.books);
            localStorage.setItem(STORAGE_KEY, parsed);
        },
        updateBookInfo(e){
            const updateInfo = {
                id: e.id,
                readDate: e.readDate,
                memo: e.memo,
                title: this.books[e.id].title,
                image: this.books[e.id].image,
                description: this.books[e.id].description
            }
            this.books.splice(e.id, 1, updateInfo)
            this.savebooks()
            this.$router.push('/book')
        },

        goToEditPage(id){
            this.$router.push(`/book/edit/${id}`)
        },
        deleteLocalStorage(){
            const isDeleted = '本当に削除してもよろしいでしょうか。'
            if(window.confirm(isDeleted)){
                localStorage.setItem(STORAGE_KEY, '')
                localStorage.removeItem(STORAGE_KEY)
                this.book=[]
                window.location.reload()
            }
        }
    }
}
</script>

<style>

</style>