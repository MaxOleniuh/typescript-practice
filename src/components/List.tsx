interface UsersListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: UsersListProps<T>) {

  return (
    <div>
        {props.items.map(props.renderItem)}
    </div>
  )
}

