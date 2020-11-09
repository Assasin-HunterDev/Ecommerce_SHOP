import { Form } from "vform";

export default {
    products : [],
    sizes: [
        {
            name: 'small',
            value:'small'
        },
        {
            name: 'medium',
            value:'medium'
        },
        {
            name: 'large',
            value:'large'
         },
    ],
    colors: [
        {
            name: 'Red',
            value:'red'
        },
        {
            name: 'Yellow',
            value:'yellow'
        },
        {
            name: 'Green',
            value:'green'
         },
          {
            name: 'Blue',
            value:'blue'
        },
        {
            name: 'Pink',
            value:'yellow'
        },
        {
            name: 'Orange',
            value:'orange'
         },

],
    addProductData : new Form({
        name: "",
        sku:"",
        brand_id: "",
        price:"",
        description: ""
    }),
    addProductMeta: {
        showModal: false,
        isImageVisible: false
    },
    editProductData: new Form({
        brand_id:'',
        name: "",
        slug:"",
        sku:"",
        brand_id: "",
        price:"",
        description: ""
    }),
    editProductMeta: {
        isImageVisible: false,
        showModal: false
    },
    isLoading: false,
    filterString:{
        page: 1,
        perPage : 10,
        orderBy: 'created_at',
        sortBy: 'desc',
        q: "",
        total: 0
    },
    multiSelected: []
}