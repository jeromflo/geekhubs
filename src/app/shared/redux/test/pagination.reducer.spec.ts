import { TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { down, reset } from "../actions/pagination.actions";
import { paginationReducer } from "../reducers/pagination.reducer";

describe('Pagination.reducer.ts', () => {
    let store: Store<{
        pagination: number
    }>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ pagination: paginationReducer }),
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
    it('down less 0', () => {
        store.select('pagination').subscribe(pagination => {
            expect(pagination).toBe(0);
        });

        store.dispatch(down());
    })
})