import { reset } from 'src/app/shared/redux/actions/cart.actions';
import { Item } from 'src/app/shared/interfaces/item';
import { TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { cartReducer } from "../reducers/cart.reducer";

describe('Pagination.reducer.ts', () => {
    let store: Store<{
        cart: Item[]
    }>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ cart: cartReducer }),
            ],
            declarations: [
            ], providers: [Store]

        }).compileComponents();
    });
    beforeEach(() => {
        store = TestBed.inject(Store);
    });
    it('reset', () => {
        store.dispatch(reset());
        expect(store).toBeDefined()
    })

})